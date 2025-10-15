function f3() {
    return f3;
}
function f4() {
    function f5() {
        const v6 = class {
        }
        for (let i = 0; i < 5; i++) {
        }
        class C7 extends Symbol {
        }
        const v8 = class {
        }
        const v9 = new Uint8Array();
        const wasm_code = v9;
        const v11 = {};
        const v12 = {};
        const v13 = {};
        const v14 = class {
        }
        const v15 = {};
        const v16 = {};
        const v17 = class {
        }
        class C18 {
        }
        function f19(a20) {
            return v14;
        }
        class C21 extends f19 {
        }
        const v22 = class {
        }
        class C23 {
        }
        const v24 = class {
        }
        class C25 {
        }
        class C26 {
        }
        for (const v27 in Uint8Array) {
            for (let [v28,v29,v30] of v27) {
                function F31(a33) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C34 extends WeakMap {
                }
                const v35 = class {
                }
                function f36() {
                }
                const v37 = [-1e-15,2.220446049250313e-16,NaN,3.0,-3.8513673514695594e+307,NaN,0.6495412879052547,3.0];
                const v38 = [1.7976931348623157e+308,-1000000.0,-8.079084485476342,-1000000.0,3.0];
                const v39 = [8,16,268435441,-1191931371,256,42902983,1073741823];
                function F40(a42, a43, a44, a45) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F40(v38, v39, v37);
                function F47(a49, a50) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v51 = Uint8Array(v37, v30, v29);
                const t62 = WebAssembly.Tag;
                t62();
                const t64 = WebAssembly.Module;
                const v56 = t64(v51);
                function f57() {
                }
                const v58 = {};
                const v59 = {};
                const t70 = WebAssembly.Instance;
                const v61 = new t70(v56);
                v61.exports;
            }
        }
        const v63 = {};
        for (let i65 = 0;
            (() => {
                const v67 = i65 < 20000;
                function F68(a70, a71) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v72 = 0; v72 < 5; v72++) {
                    F68.d >>>= 100000;
                }
                return v67;
            })();
            i65++) {
        }
        for (let v77 = 0; v77 < 5; v77++) {
        }
        const v78 = {};
        const v79 = {};
        return { done: WeakMap };
    }
    return { next: f5 };
}
const v82 = Symbol.iterator;
f3.bind(null, ...{ [v82]: f4 });
