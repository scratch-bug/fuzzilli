function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            const v10 = new Int8Array();
            function f11(a12) {
                return a2;
            }
            Object.defineProperty(v10, "constructor", { configurable: true, enumerable: true, value: f11 });
            return a3;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v13 = new F4(f0, f0);
    class C14 {
        static [v13](a16, a17, a18) {
        }
    }
    return a1;
}
const v22 = new Worker(f0, { type: "function" });
v22.getMessage();
