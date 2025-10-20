function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            const v10 = { type: "🙌🏿", e: a4 };
            const t6 = JSON.stringify;
            t6(v10);
            for (let i16 = 0, i17 = 10; i17; i17--) {
            }
            function f23(a24) {
            }
            return f23;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v25 = new F5();
    class C26 {
        static [v25](a28, a29, a30) {
        }
    }
}
new F1();
new F1();
