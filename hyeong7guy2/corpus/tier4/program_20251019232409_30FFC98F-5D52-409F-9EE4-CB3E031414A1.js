function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = new Uint32Array();
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = v9;
        }
        const v16 = new F10();
        const v17 = v16.f;
        const v19 = new Uint8Array();
        v17.set(v19);
        return Uint8Array;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v23 = new F0();
new F0(v23, v23);
