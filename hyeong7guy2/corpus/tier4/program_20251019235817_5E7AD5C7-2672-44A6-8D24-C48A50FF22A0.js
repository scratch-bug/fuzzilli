function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v10 = Date.prototype.getTime;
        let v11;
        try { v11 = v10.apply(this); } catch (e) {}
        return v11;
    }
    f4(a3, f4, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0(F0, F0);
const v14 = new F0();
new F0(v14, v13);
