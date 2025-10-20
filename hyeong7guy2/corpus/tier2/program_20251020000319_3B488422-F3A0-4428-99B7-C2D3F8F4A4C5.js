function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        const v5 = [9.883217914066156e+307,-773372.7548597748,2.2250738585072014e-308];
        const v6 = class {
        }
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v12 = new F8(Uint32Array, Uint32Array);
        const v13 = new Uint32Array();
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            try { this(a16, v13); } catch (e) {}
        }
        const v19 = new F14(v12, v5);
        const v20 = new F14(v19, F8);
        new F14(v20, v19);
        class C22 {
        }
        class C23 {
        }
        const v24 = {};
        for (let i26 = 0;
            (() => {
                const v28 = i26 < 20000;
                for (let i = 0; i < 5; i++) {
                }
                for (let v29 = 0; v29 < 5; v29++) {
                }
                return v28;
            })();
            ++i26) {
            v24.p1 = C23;
        }
        class C33 extends Uint32Array {
        }
        const v35 = class {
        }
        const v46 = 4 >> 4;
        7 * 7;
        0 >> v46;
        const v73 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
        const wasm_code = v73;
        const t46 = WebAssembly.Module;
        const v77 = new t46(wasm_code);
        const v78 = { f: v35 };
        for (const v79 in Uint8Array) {
            for (let [v80,v81,v82] of 256) {
            }
        }
        const v83 = { m: v78 };
        const t54 = WebAssembly.Instance;
        const v85 = new t54(v77, v83);
        const v86 = v85.constructor;
        try { v86(); } catch (e) {}
        for (let v88 = 0; v88 < 5; v88++) {
            v88 < 20000;
        }
        const v91 = {};
        const v92 = {};
        class C93 extends Uint32Array {
        }
        const v95 = class {
        }
        class C96 {
        }
        const v97 = class {
        }
        class C99 extends Uint8ClampedArray {
        }
        const v100 = {};
        for (let v101 = 0; v101 < 5; v101++) {
        }
        const v102 = class {
        }
        function F103(a105, a106) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v107 = new F103();
        class C108 {
            static [v107](a110, a111, a112) {
            }
        }
        class C113 {
        }
        const v114 = {};
        for (let v115 = 0; v115 < 5; v115++) {
            const v116 = {};
            function f117(a118) {
                return a118;
            }
        }
        const v119 = {};
        const v120 = {};
        const v121 = class {
        }
        const v122 = {};
        const v123 = {};
        const v124 = class {
        }
        class C125 {
        }
        const v126 = {};
        const v127 = {};
        function F128(a130, a131, a132) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let i133 = F128; i133 < 25000;) {
        }
        function f138(a139) {
            return a139;
        }
        class C140 extends f138 {
        }
        const v141 = class {
        }
        class C142 {
        }
        const v143 = class {
        }
        class C144 {
        }
        class C145 {
        }
        for (const v146 in Uint8Array) {
            for (let [v147,v148,v149] of 256) {
            }
        }
        const v150 = {};
        for (let v151 = 0; v151 < 5; v151++) {
            function F152(a154, a155) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v156 = new F152(f3, v151);
            class C157 {
                static [v156](a159, a160, a161) {
                }
            }
        }
        const v162 = {};
        const v163 = {};
        return { done: true };
    }
    return { next: f4 };
}
const v167 = Symbol.iterator;
f2.bind(null, ...{ [v167]: f3 });
