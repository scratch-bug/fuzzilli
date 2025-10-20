function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f8(a9, a10, a11) {
                function f13(a14) {
                    function* f15(a16, a17, a18, a19) {
                    }
                    return f15(this, a6, f15, a14);
                }
                this.onmessage = f13;
                return a9;
            }
            const v23 = [1];
            new Worker(f8, { arguments: v23, type: "function" });
        }
        f5(a2);
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v28 = new F0();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
