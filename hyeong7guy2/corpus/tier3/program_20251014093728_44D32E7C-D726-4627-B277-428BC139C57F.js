function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v15 = Reflect.construct(F8, a2);
        const v16 = new F8(F8, F0, v15, v15);
        return v16;
    }
    try { f4(); } catch (e) {}
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0();
new F0(v18);
new F0(v18, v18);
