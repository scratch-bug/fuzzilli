function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a11.BYTES_PER_ELEMENT = a11;
            a14--;
            this.f = a14;
        }
        try { new F9(a6); } catch (e) {}
        const v17 = new F9(f4, 1825, F9, 1825);
        const t11 = v17.constructor;
        new t11(v17);
        return f4;
    }
    f4(a2, f4);
    const t15 = f4();
    t15();
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0();
const v24 = v23.constructor;
new v24(v24);
const t23 = v23.constructor;
new t23();
