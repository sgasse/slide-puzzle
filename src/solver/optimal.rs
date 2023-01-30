use std::collections::{HashMap, VecDeque};

use crate::board::{get_empty_field_idx, get_swappable_neighbours, initialize_fields};

pub trait AsStringHash<T> {
    fn as_string_hash(&self) -> String;
}

impl<T> AsStringHash<T> for Vec<T>
where
    T: core::fmt::Debug,
{
    fn as_string_hash(&self) -> String {
        format!("{:?}", &self)
    }
}

/// Find the swap order to solve a puzzle
///
/// When shifting around the pieces, we can create cycles which lead back to
/// their original state. However the path to a state which we take the first
/// time we see it is guaranteed to be cycle-free since we traverse the graph
/// in a FIFO order. Therefore, we do not store subsequent (longer) paths to
/// states which we already know.
pub fn find_swap_order(fields: &[u8], width: usize, height: usize) -> Vec<(usize, usize)> {
    // Determine initial values
    let fields = fields.to_owned();
    let initial_hash = fields.as_string_hash();
    let target_fields = initialize_fields(fields.len());
    let target_hash = target_fields.as_string_hash();

    // Exit early if the puzzle is already solved
    if initial_hash == target_hash {
        return Vec::with_capacity(0);
    }

    let empty_field_idx = get_empty_field_idx(&fields);

    // Map from a state hash to its parent hash and the last swap that led to
    // this state from the parent. We need to the swap information to trace back
    // a path from the start to the target later.
    let mut parent_map = HashMap::new();

    // Hold tuples of (state, state_hash parent_hash, last_swap)
    let mut states_to_explore = VecDeque::from([(
        fields,
        initial_hash.clone(),
        // The parent hash of the first state is never used/considered
        "".to_owned(),
        (empty_field_idx, empty_field_idx),
    )]);

    let mut num_iterations = 0;

    // Get state information for unseen state
    while let Some((cur_fields, cur_hash, parent_hash, last_swap)) = states_to_explore.pop_front() {
        num_iterations += 1;

        // Add state hash with parent and last swap to map
        parent_map.insert(cur_hash.clone(), (parent_hash, last_swap));

        // If the state is the target state, break
        if cur_hash == target_hash {
            break;
        }

        // The empty field is at the second position of the last swap
        let empty_field_idx = last_swap.1;

        // Determine all reachable next states
        let swappable_neighbours = get_swappable_neighbours(width, height, last_swap.1);
        let reachable_tuples: Vec<_> = swappable_neighbours
            .into_iter()
            .map(|neighbour_idx| {
                let mut next_fields = cur_fields.clone();
                let next_swap = (empty_field_idx, neighbour_idx);
                next_fields.swap(next_swap.0, next_swap.1);
                let next_fields_hash = next_fields.as_string_hash();

                // (fields, fields_hash, parent_hash, last_swap)
                (next_fields, next_fields_hash, cur_hash.clone(), next_swap)
            })
            .collect();

        // Filter out states which we have previously seen (via a shorter path)
        let unseen_tuples: Vec<_> = reachable_tuples
            .into_iter()
            .filter(|elem_tuple| !parent_map.contains_key(&elem_tuple.1))
            .collect();

        // Add information of unseen states to the queue to explore
        states_to_explore.extend(unseen_tuples.into_iter());
    }

    log::debug!("Number of iterations in solver: {}", num_iterations);

    // Extract the path of swaps from the initial position to the target if it
    // exists
    match parent_map.contains_key(&target_hash) {
        false => Vec::with_capacity(0),
        true => {
            // Trace back from target to beginning
            let mut swaps = Vec::new();

            let mut next_hash = target_hash;
            while let Some((parent_hash, swap)) = parent_map.get(&next_hash) {
                swaps.push(*swap);
                if *parent_hash == initial_hash {
                    break;
                }

                next_hash = parent_hash.clone();
            }

            log::debug!("Number of swaps to solve: {}", swaps.len());

            swaps.into_iter().rev().collect()
        }
    }
}

#[cfg(test)]
mod test {

    use super::*;

    #[test]
    fn test_find_swap_order_zero_moves() {
        let fields = vec![0, 1, 2, u8::MAX];
        let swap_order = find_swap_order(&fields, 2, 2);
        assert_eq!(swap_order, Vec::with_capacity(0));
    }

    #[test]
    fn test_find_swap_order_one_move() {
        let fields = vec![0, 1, u8::MAX, 2];
        let swap_order = find_swap_order(&fields, 2, 2);
        assert_eq!(swap_order, vec![(2, 3)]);
    }

    #[test]
    fn test_find_swap_order_four_swaps() {
        let fields = vec![u8::MAX, 1, 2, 0, 3, 5, 6, 4, 7];
        let swap_order = find_swap_order(&fields, 3, 3);
        assert_eq!(swap_order, vec![(0, 3), (3, 4), (4, 7), (7, 8)]);
    }
}