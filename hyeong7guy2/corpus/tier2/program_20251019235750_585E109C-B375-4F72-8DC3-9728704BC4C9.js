function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                Math.acosh(4096);
                Math.cos(a7 << a7);
                return a4;
            }
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v16 = new F5();
    class C17 {
        static [v16](a19, a20, a21) {
        }
    }
}
new F1();
