function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        try { a6.call(); } catch (e) {}
        class C9 {
        }
        const v11 = C9.constructor.bind();
        v11.apply(f4, v11);
        return F0;
    }
    f4(a2, a2);
    %OptimizeFunctionOnNextCall(a3);
}
const v14 = new F0(F0, F0);
const v15 = v14.constructor;
new v15(v14, v15, F0, F0, F0);
