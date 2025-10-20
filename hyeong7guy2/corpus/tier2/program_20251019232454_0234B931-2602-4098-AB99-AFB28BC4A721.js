function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a12.d = a12;
            a12.BYTES_PER_ELEMENT = a15;
            a15--;
            this.f = a15;
        }
        const v17 = new F10(Int8Array, 1825, F10, 1825);
        const t11 = v17.constructor;
        const v19 = new t11(v17);
        const t13 = v19.constructor;
        new t13(v19);
        return Int8Array;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0();
new F0(F0, v23);
new F0(F0, v23);
