function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            try { a12.apply(f4, a14, a13, a15); } catch (e) {}
            a12.e = a12;
            a15--;
            this.f = a15;
        }
        const v18 = new F10(Int8Array, 1825, F10, 1825);
        new F10(v18);
        return F0;
    }
    f4(F0, this, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0();
new F0();
const v23 = new F0(F0, v21);
const t20 = v23.constructor;
new t20();
