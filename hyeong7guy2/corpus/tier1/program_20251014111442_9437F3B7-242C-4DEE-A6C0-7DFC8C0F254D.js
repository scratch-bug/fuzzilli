function f2() {
    return f2;
}
function f3() {
    function f4() {
        const v5 = class {
        }
        for (let i = 0; i < 5; i++) {
        }
        class C7 extends Uint32Array {
        }
        const v9 = class {
        }
        const v10 = new Uint8Array(C7, 256, 256);
        const wasm_code = v10;
        const v12 = {};
        const v13 = {};
        const v14 = {};
        const v15 = class {
        }
        const v16 = {};
        const v17 = {};
        const v18 = class {
        }
        class C19 {
        }
        function f20(a21) {
            return a21;
        }
        class C22 extends f20 {
        }
        const v23 = class {
        }
        class C24 {
        }
        const v25 = class {
        }
        class C26 {
        }
        class C27 {
        }
        for (const v28 in Uint8Array) {
            for (let [v29,v30,v31] of 256) {
                function F33(a35) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C36 extends WeakMap {
                }
                const v37 = class {
                }
                function f38() {
                }
                const v39 = [-1e-15,2.220446049250313e-16,NaN,3.0,-3.8513673514695594e+307,NaN,0.6495412879052547,3.0];
                const v40 = [1.7976931348623157e+308,-1000000.0,-8.079084485476342,-1000000.0,3.0];
                const v41 = [8,16,268435441,-1191931371,256,42902983,1073741823];
                function F42(a44, a45, a46, a47) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F42(v40, v41, v39);
                function F49(a51, a52) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v53 = [v25,v25,v25,v25,v25];
                const v54 = Uint8Array();
                const t64 = WebAssembly.Tag;
                t64(v53);
                const t65 = WebAssembly.Module;
                const v59 = t65(v54);
                function f60() {
                }
                const v61 = {};
                const v62 = {};
                const t71 = WebAssembly.Instance;
                const v64 = new t71(v59);
                v64.exports;
            }
        }
        const v66 = {};
        for (let i68 = 0;
            (() => {
                const v70 = i68 < 20000;
                function F71(a73, a74) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v75 = 0; v75 < 5; v75++) {
                    F71.d >>>= 100000;
                }
                return v70;
            })();
            i68++) {
        }
        for (let v80 = 0; v80 < 5; v80++) {
        }
        const v81 = {};
        const v82 = {};
        return { done: true };
    }
    return { next: f4 };
}
const v86 = Symbol.iterator;
f2.bind(null, ...{ [v86]: f3 });
