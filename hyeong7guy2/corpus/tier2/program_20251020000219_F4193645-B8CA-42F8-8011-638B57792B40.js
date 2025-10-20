class C2 extends Float32Array {
}
const v3 = new C2();
const v6 = Symbol.iterator;
const v59 = {
    [v6]() {
        const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
        const t1 = WebAssembly.Module;
        const v46 = new t1(v43);
        function f47() {
            return 109;
        }
        const v48 = { f: f47 };
        const v49 = { m: v48 };
        const t8 = WebAssembly.Instance;
        const v51 = new t8(v46, v49);
        const t10 = v51.exports.main;
        t10();
        v3[6] >>>= 10;
        const v58 = {
            next() {
                return { done: 10 };
            },
        };
        return v58;
    },
};
const v62 = new Int16Array();
function f63() {
    new Date(WeakSet, Date, 882, ...v62, ...v59);
    return Date;
}
f63();
%PrepareFunctionForOptimization(f63);
%OptimizeFunctionOnNextCall(f63);
f63();
