function f0() {
    return f0;
}
class C1 extends f0 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        const t8 = delete C1?.d;
        t8[3124] = Float32Array;
        const v14 = Date.prototype.getSeconds;
        try { v14.apply(v14); } catch (e) {}
        return this;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
const v17 = new F3(F3, C1);
const v18 = v17.constructor;
new v18(v17, v18, F3);
new F3(v17, v17);
