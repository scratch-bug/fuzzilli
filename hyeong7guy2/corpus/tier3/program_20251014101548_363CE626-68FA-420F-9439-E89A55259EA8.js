function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            a11 | a11;
        }
        const v15 = new F8();
        v15.constructor(a2, F0);
        return this;
    }
    try { f4(); } catch (e) {}
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v19 = new F0();
const t16 = v19.constructor;
new t16();
