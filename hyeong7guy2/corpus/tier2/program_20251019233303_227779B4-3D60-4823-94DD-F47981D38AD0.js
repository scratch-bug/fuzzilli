function f0() {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6, a7, a8, a9) {
            return { 1366327891: this };
        }
        const v11 = f5();
        function f12() {
            function f13(a14) {
            }
            function f15(a16, a17, a18) {
                return a17;
            }
            const v21 = [F1,F1,v11];
            new Worker(f15, { arguments: v21, type: "function" });
            return f13;
        }
        Object.defineProperty(this, "toString", { get: f12 });
    }
    const v24 = new F1();
    class C25 {
        static [v24](a27, a28, a29) {
        }
    }
    return f0;
}
f0();
f0();
