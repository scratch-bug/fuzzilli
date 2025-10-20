function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            for (let v9 = 0; v9 < 10; v9++) {
                22491 & a6;
            }
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v12 = new F4(a1, a1);
    class C13 {
        static [v12](a15, a16, a17) {
        }
    }
    return f0;
}
const v20 = { type: "function" };
const v21 = new Worker(f0, v20);
v21.getMessage(f0, v21, "function", f0, v20);
