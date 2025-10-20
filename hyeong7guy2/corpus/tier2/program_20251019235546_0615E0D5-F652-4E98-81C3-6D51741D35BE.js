function f3() {
    return undefined;
}
new Int32Array(1024);
class C9 {
    static get f() {
        this[Symbol.iterator] = undefined;
        return 58436n;
    }
}
new C9();
new C9();
function f15() {
    function f16(a17, a18) {
        let v19 = -2.220446049250313e-16;
        v19++;
        ++v19;
        const v23 = new SharedArrayBuffer();
        const v25 = new DataView(v23);
        try { v25.setFloat64(v19); } catch (e) {}
        const v27 = class {
            constructor(a29, a30) {
                gc();
                function F33(a35, a36) {
                    if (!new.target) { throw 'must be called with new'; }
                    const t25 = globalThis.performance.measureMemory;
                    t25();
                }
                new F33();
            }
        }
        new v27();
        new v27();
        function F45(a47, a48, a49, a50) {
            if (!new.target) { throw 'must be called with new'; }
            new Float64Array(1073741824);
        }
        new F45();
        return v25;
    }
    const v54 = f16(f16, f15);
    %PrepareFunctionForOptimization(f16);
    %OptimizeMaglevOnNextCall(f16);
    f16(f15, v54);
    return f15;
}
({ construct: f15 }).construct();
