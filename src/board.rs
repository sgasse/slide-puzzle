use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct PuzzleBoardProps {
    pub fields: [u8; 9],
    pub width: usize,
    pub height: usize,
    pub field_size: usize,
    pub field_unit: &'static str,
    pub background_url: String,
    pub on_click: Callback<usize>,
}

struct FieldProps {
    left_pos: usize,
    top_pos: usize,
    img_pos_x: usize,
    img_pos_y: usize,
    class: &'static str,
    name: String,
    bg_str: String,
}

#[function_component(PuzzleBoard)]
pub fn puzzle_board(
    PuzzleBoardProps {
        fields,
        width,
        height,
        field_size,
        field_unit,
        on_click,
        background_url,
    }: &PuzzleBoardProps,
) -> Html {
    let on_click = on_click.clone();

    // Callback to concatenate a size value with the given unit
    let as_unit = |value: usize| format!("{}{}", value, field_unit);

    // Enumerate values and sort by fields. This is required so that every
    // field shows up at the same list index in the DOM regardless of its left/
    // right value. Otherwise, elements would be recreated and the animation
    // state lost.
    let mut indexes_fields: Vec<_> = fields.into_iter().enumerate().collect();
    indexes_fields.sort_by(|a, b| b.1.cmp(&a.1));

    let fields_html: Html = indexes_fields
        .into_iter()
        .map(|(idx, &field)| {
            let on_field_click = {
                let on_click = on_click.clone();
                Callback::from(move |_| on_click.emit(idx))
            };
            let bg_string = format!(
                "background-size: {} {}; \
                 background-image: url({});",
                as_unit(width * field_size),
                as_unit(height * field_size),
                background_url
            );
            let (left_pos, top_pos) = get_left_top(idx, *width, *field_size);
            let (left_img, top_img) = get_left_top(field as usize, *width, *field_size);

            let field_props = match field {
                u8::MAX => FieldProps {
                    left_pos,
                    top_pos,
                    img_pos_x: 0,
                    img_pos_y: 0,
                    class: "empty-field",
                    name: "".to_owned(),
                    bg_str: "".to_owned(),
                },
                _ => FieldProps {
                    left_pos,
                    top_pos,
                    img_pos_x: width * field_size - left_img,
                    img_pos_y: height * field_size - top_img,
                    class: "field",
                    name: format!("{}", field),
                    bg_str: bg_string,
                },
            };

            html! {
                <div
                    key={field}
                    class={field_props.class}
                    style={format!("left: {}; \
                                    top: {}; \
                                    width: {}; \
                                    height: {}; \
                                    position: absolute; \
                                    transition: all 0.5s; \
                                    background-position: {} {}; \
                                    {}",
                                    as_unit(field_props.left_pos),
                                    as_unit(field_props.top_pos),
                                    as_unit(*field_size),
                                    as_unit(*field_size),
                                    as_unit(field_props.img_pos_x),
                                    as_unit(field_props.img_pos_y),
                                    field_props.bg_str)}
                    onclick={on_field_click}
                >
                    {field_props.name}
                </div>
            }
        })
        .collect();

    html! {
        <div
            class="board"
            style={format!("width: {}; \
                            height: {}; \
                            position: relative;",
                            as_unit(width*field_size),
                            as_unit(height*field_size))}
        >
            { fields_html }
        </div>
    }
}

fn get_left_top(idx: usize, width: usize, unit_size: usize) -> (usize, usize) {
    let (row, col): (usize, usize) = get_row_col_from_idx(idx, width);
    let left = col * unit_size;
    let top = row * unit_size;

    (left, top)
}

fn get_row_col_from_idx<T, U>(idx: T, width: T) -> (U, U)
where
    T: std::ops::Div<Output = T>,
    T: std::ops::Rem<Output = T>,
    T: Copy,
    U: std::convert::From<T>,
{
    let row = idx / width;
    let col = idx % width;

    (row.into(), col.into())
}

fn get_idx_from_row_col<T, U>(row: T, col: T, width: T) -> U
where
    T: std::ops::Mul<Output = T>,
    T: std::ops::Add<Output = T>,
    U: std::convert::From<T>,
{
    row.mul(width).add(col).into()
}

pub fn trigger_field(fields: &[u8; 9], width: usize, height: usize, clicked_idx: usize) -> [u8; 9] {
    let mut fields = fields.clone();

    if let Some(&u8::MAX) = fields.get(clicked_idx) {
        // Clicked on the empty field - unclear so nothing to do
        return fields;
    }

    let (row, col): (usize, usize) = get_row_col_from_idx(clicked_idx, width);
    for (delta_row, delta_col) in [(-1, 0), (1, 0), (0, -1), (0, 1)] {
        let neighbour_row = row as isize + delta_row;
        let neighbour_col = col as isize + delta_col;
        if in_bounds(
            neighbour_row,
            neighbour_col,
            width as isize,
            height as isize,
        ) {
            let idx: isize = get_idx_from_row_col(neighbour_row, neighbour_col, width as isize);
            if let Some(&u8::MAX) = fields.get(idx as usize) {
                fields.swap(clicked_idx, idx as usize);
            }
        }
    }
    fields
}

fn in_bounds<T, U>(row: T, col: T, width: U, height: U) -> bool
where
    T: PartialOrd<T>,
    T: PartialOrd<U>,
    T: Default,
{
    let t_zero: T = T::default();
    t_zero <= row && row < width && t_zero <= col && col < height
}

#[derive(Clone, PartialEq)]
pub struct Piece {
    pub id: u8,
    pub name: String,
}

#[derive(Properties, PartialEq)]
pub struct PieceBoardProps {
    pub fields: Vec<Piece>,
    pub on_click: Callback<Piece>,
}

#[function_component(PieceBoard)]
pub fn field_board(PieceBoardProps { fields, on_click }: &PieceBoardProps) -> Html {
    let on_click = on_click.clone();
    let fields_html: Html = fields
        .iter()
        .map(|field| {
            let on_field_click = {
                let on_click = on_click.clone();
                let field = field.clone();
                Callback::from(move |_| on_click.emit(field.clone()))
            };
            html! {
                <div key={field.id} class="field" onclick={on_field_click}>
                    {field.name.clone()}
                </div>
            }
        })
        .collect();

    html! {
        <div class="field-board">
            { fields_html }
        </div>
    }
}
