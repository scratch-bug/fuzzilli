function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v13 = new Int16Array();
                const v14 = v13.length;
                v14 - v14;
                this.h >>>= 10;
                return v14 | v14;
            }
            f10(f9);
            f10();
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v19 = new F5();
    class C20 {
        static [v19](a22, a23, a24) {
        }
    }
}
new F1();
