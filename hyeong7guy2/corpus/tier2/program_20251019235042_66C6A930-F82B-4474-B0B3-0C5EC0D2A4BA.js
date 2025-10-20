function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            return 10;
        }
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function f13() {
                function f14(a15) {
                    const v18 = new SharedArrayBuffer(4096);
                    const v20 = new Uint32Array(v18);
                    v20.copyWithin("8", 10);
                }
                return f14;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v22 = new F9(10, 10);
        class C23 {
            static [v22](a25, a26, a27) {
            }
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v28 = new F1(10, F1);
class C29 {
    static [v28](a31, a32, a33) {
    }
}
