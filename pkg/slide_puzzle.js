let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }

    function wasm_main() {
        wasm.wasm_main();
    }
    exports.wasm_main = wasm_main;
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function(arg0, arg1) {
                const ret = debugString(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function(arg0) {
                const ret = arg0 === undefined;
                return ret;
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg__wbg_cb_unref_dcc1a90847f04c41: function(arg0) {
                arg0._wbg_cb_unref();
            },
            __wbg_appendChild_fb8c52e7dd8484ea: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.appendChild(arg1);
                return ret;
            }, arguments); },
            __wbg_createElement_74049073a11f9c31: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
                return ret;
            }, arguments); },
            __wbg_cssRules_e436f5954ecc052d: function() { return handleError(function (arg0) {
                const ret = arg0.cssRules;
                return ret;
            }, arguments); },
            __wbg_cssText_bfa4d866f408c95f: function(arg0, arg1) {
                const ret = arg1.cssText;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_debug_05be7ad0a1e623f8: function(arg0, arg1, arg2, arg3) {
                console.debug(arg0, arg1, arg2, arg3);
            },
            __wbg_deleteRule_6a6e126fd21857be: function() { return handleError(function (arg0, arg1) {
                arg0.deleteRule(arg1 >>> 0);
            }, arguments); },
            __wbg_document_9854e03c05fc8834: function(arg0) {
                const ret = arg0.document;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_error_6614f5677eeead43: function(arg0, arg1, arg2, arg3) {
                console.error(arg0, arg1, arg2, arg3);
            },
            __wbg_error_757e9472f8410341: function(arg0, arg1) {
                let deferred0_0;
                let deferred0_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    console.error(getStringFromWasm0(arg0, arg1));
                } finally {
                    wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
                }
            },
            __wbg_error_c9cf3fc2064683a9: function(arg0) {
                console.error(arg0);
            },
            __wbg_getElementById_cc94972b404e4eaa: function(arg0, arg1, arg2) {
                const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_getPropertyValue_e90a3628c2de4fb6: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_getRandomValues_436a51d0629d84e1: function() { return handleError(function (arg0, arg1) {
                globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
            }, arguments); },
            __wbg_get_51c4909a76fd81f3: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_get_9356b22e2a46465d: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_get_b434e6429ef57392: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_info_b68ad4a35d1670c2: function(arg0, arg1, arg2, arg3) {
                console.info(arg0, arg1, arg2, arg3);
            },
            __wbg_insertRule_d37b4c207925041b: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.insertRule(getStringFromWasm0(arg1, arg2));
                return ret;
            }, arguments); },
            __wbg_instanceof_CssStyleSheet_d8d8779367c843b6: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof CSSStyleSheet;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_HtmlDivElement_8d097ac47a3bd587: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof HTMLDivElement;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_HtmlElement_32fb153a5a0e2349: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof HTMLElement;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Node_177cfa58c50e2609: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Node;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Window_82d71df4eddf88bc: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Window;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_length_889c231dbcc8d5ca: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_location_9c46e8ada95d3174: function(arg0) {
                const ret = arg0.location;
                return ret;
            },
            __wbg_log_19b94368315af0fb: function(arg0, arg1, arg2, arg3) {
                console.log(arg0, arg1, arg2, arg3);
            },
            __wbg_new_227d7c05414eb861: function() {
                const ret = new Error();
                return ret;
            },
            __wbg_screenX_caa59672df54a653: function(arg0) {
                const ret = arg0.screenX;
                return ret;
            },
            __wbg_screenY_8eda0f2b59e3b8ce: function(arg0) {
                const ret = arg0.screenY;
                return ret;
            },
            __wbg_search_31c06ba77ebf51f4: function() { return handleError(function (arg0, arg1) {
                const ret = arg1.search;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_setProperty_097bc3d55ce44513: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_setTimeout_db7bbc18a17e152a: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.setTimeout(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_set_className_541fce5cd31918aa: function(arg0, arg1, arg2) {
                arg0.className = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_cssText_e5203348a68521e9: function(arg0, arg1, arg2) {
                arg0.cssText = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_id_60955e6018d03b26: function(arg0, arg1, arg2) {
                arg0.id = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_onclick_c978dc4919c3c885: function(arg0, arg1) {
                arg0.onclick = arg1;
            },
            __wbg_set_ontouchend_0c4e2ecfe761b114: function(arg0, arg1) {
                arg0.ontouchend = arg1;
            },
            __wbg_set_ontouchmove_1422c06d7ef74897: function(arg0, arg1) {
                arg0.ontouchmove = arg1;
            },
            __wbg_set_ontouchstart_705e91d70e2abdb9: function(arg0, arg1) {
                arg0.ontouchstart = arg1;
            },
            __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
                const ret = arg1.stack;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_static_accessor_GLOBAL_266715b9d96ba635: function() {
                const ret = typeof global === 'undefined' ? null : global;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179: function() {
                const ret = typeof globalThis === 'undefined' ? null : globalThis;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_SELF_0b583911f537483a: function() {
                const ret = typeof self === 'undefined' ? null : self;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_WINDOW_d7f903d1508cbdc4: function() {
                const ret = typeof window === 'undefined' ? null : window;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_styleSheets_7cd1d9e6a4c58d3c: function(arg0) {
                const ret = arg0.styleSheets;
                return ret;
            },
            __wbg_style_4bce24230e493a7c: function(arg0) {
                const ret = arg0.style;
                return ret;
            },
            __wbg_targetTouches_d99e837693e1617e: function(arg0) {
                const ret = arg0.targetTouches;
                return ret;
            },
            __wbg_warn_88929063e36ba285: function(arg0, arg1, arg2, arg3) {
                console.warn(arg0, arg1, arg2, arg3);
            },
            __wbindgen_generic_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("MouseEvent")], shim_idx: 56, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_740f87ab467470cf___convert__closures_____invoke___web_sys_fe92264c4cda56e2___features__gen_MouseEvent__MouseEvent______true_);
                return ret;
            },
            __wbindgen_generic_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("TouchEvent")], shim_idx: 56, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_740f87ab467470cf___convert__closures_____invoke___web_sys_fe92264c4cda56e2___features__gen_MouseEvent__MouseEvent______true__2);
                return ret;
            },
            __wbindgen_generic_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 58, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_740f87ab467470cf___convert__closures_____invoke_______true_);
                return ret;
            },
            __wbindgen_generic_0000000000000004: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_init_externref_table: function() {
                const table = wasm.__wbindgen_externrefs;
                const offset = table.grow(4);
                table.set(0, undefined);
                table.set(offset + 0, undefined);
                table.set(offset + 1, null);
                table.set(offset + 2, true);
                table.set(offset + 3, false);
            },
        };
        return {
            __proto__: null,
            "./slide_puzzle_bg.js": import0,
        };
    }

    function wasm_bindgen_740f87ab467470cf___convert__closures_____invoke_______true_(arg0, arg1) {
        wasm.wasm_bindgen_740f87ab467470cf___convert__closures_____invoke_______true_(arg0, arg1);
    }

    function wasm_bindgen_740f87ab467470cf___convert__closures_____invoke___web_sys_fe92264c4cda56e2___features__gen_MouseEvent__MouseEvent______true_(arg0, arg1, arg2) {
        wasm.wasm_bindgen_740f87ab467470cf___convert__closures_____invoke___web_sys_fe92264c4cda56e2___features__gen_MouseEvent__MouseEvent______true_(arg0, arg1, arg2);
    }

    function wasm_bindgen_740f87ab467470cf___convert__closures_____invoke___web_sys_fe92264c4cda56e2___features__gen_MouseEvent__MouseEvent______true__2(arg0, arg1, arg2) {
        wasm.wasm_bindgen_740f87ab467470cf___convert__closures_____invoke___web_sys_fe92264c4cda56e2___features__gen_MouseEvent__MouseEvent______true__2(arg0, arg1, arg2);
    }

    function addToExternrefTable0(obj) {
        const idx = wasm.__externref_table_alloc();
        wasm.__wbindgen_externrefs.set(idx, obj);
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debugString(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches && builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }

    function getArrayU8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        return decodeText(ptr >>> 0, len);
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_exn_store(idx);
        }
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function makeMutClosure(arg0, arg1, f) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                state.a = a;
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                wasm.__wbindgen_destroy_closure(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    function decodeText(ptr, len) {
        return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    const cachedTextEncoder = new TextEncoder();

    if (!('encodeInto' in cachedTextEncoder)) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasmInstance, wasm;
    function __wbg_finalize_init(instance, module) {
        wasmInstance = instance;
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        wasm.__wbindgen_start();
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (!module.ok) {
                throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
            }

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (module_or_path === undefined && script_src !== undefined) {
            module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
