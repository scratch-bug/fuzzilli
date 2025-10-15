function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 extends Uint16Array {
            }
            C15.g = C15;
        }
        new F8(this, F0, F0, a6);
        for (let i18 = 0; i18 < 20000; i18++) {
        }
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0(F0, F0);
const t18 = v25.constructor;
const v27 = new t18();
new F0();
new F0(F0, v27);
