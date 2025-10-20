function f2() {
    return f2;
}
function f3() {
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const t7 = globalThis.performance.measureMemory;
            t7();
        }
        new F5();
        for (let v14 = 0; v14 < 5; v14++) {
            v14++;
        }
        return { done: WeakMap };
    }
    return { next: f4 };
}
const v19 = Symbol.iterator;
const v20 = { [v19]: f3 };
const v61 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v103 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f104() {
    const v107 = await WebAssembly.compile(v61);
    const v109 = await WebAssembly.compile(v103);
    const t25 = WebAssembly.Instance;
    const v111 = new t25(v107);
    const v112 = WebAssembly.Instance;
    const v114 = v111.exports.exp;
    const v115 = { imp: v114 };
    const v117 = new v112(v109, { env: v115 });
    const v120 = WebAssembly.promising(v117.exports.re_exp);
    v120(2, v120, v120);
    return 4;
}
f104();
f2.bind(null, ...v20);
