function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = new a2(); } catch (e) {}
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a12.g = a12;
            a15--;
            this.f = a15;
        }
        const v17 = new F10(f5, 1825, F10, 1825);
        v17.d = v17;
        const v18 = v17.constructor;
        new v18(v17);
        const v20 = new v18(v17);
        const t16 = v20.constructor;
        new t16(v20);
        return a3;
    }
    f5(v4, v4, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v24 = new F0(F0, F0);
const v25 = v24.constructor;
new v25(v25);
