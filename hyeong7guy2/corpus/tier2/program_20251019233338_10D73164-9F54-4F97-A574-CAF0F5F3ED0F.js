function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v13 = new Int16Array();
                const v14 = v13.length;
                const v15 = { millisecond: v14, year: 1883232842 };
                v14 - v14;
                return v14 | v14;
            }
            f10(f10());
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v20 = new F5(F1, this);
    class C21 {
        static [v20](a23, a24, a25) {
        }
    }
}
new F1(1883232842, 1883232842);
