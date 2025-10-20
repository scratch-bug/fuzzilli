function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a3(); } catch (e) {}
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v13 = new Int16Array();
                eval();
                const v16 = v13.length;
                v16 >> v16;
            }
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v18 = new F5();
    class C19 {
        static [v18](a21, a22, a23) {
        }
    }
}
new F0(F0, F0);
