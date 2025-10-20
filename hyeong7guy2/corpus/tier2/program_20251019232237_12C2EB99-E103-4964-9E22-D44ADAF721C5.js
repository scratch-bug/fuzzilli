function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        try { new a7(); } catch (e) {}
        function f10() {
            return f4;
        }
        function f11(a12, a13) {
            return this;
        }
        f10.constructor = f11;
        class C14 extends f10 {
        }
        const t13 = C14.constructor;
        t13().isNaN(-1518506546) * eval;
        return f4;
    }
    const t17 = f4(F0, f4, a3);
    t17();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
