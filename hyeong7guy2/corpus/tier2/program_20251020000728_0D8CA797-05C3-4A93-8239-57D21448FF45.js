function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            const v10 = new Int8Array(a3, a6, a7);
            function f11(a12) {
                const v16 = Object(BigUint64Array.toString(a7, f0, v10));
                function f17() {
                    return a1;
                }
                function f18(a19) {
                    return f18;
                }
                Object.defineProperty(v16, "valueOf", { configurable: true, enumerable: true, get: f17, set: f18 });
                const v20 = [9.883217914066156e+307,-773372.7548597748,2.2250738585072014e-308];
                const v21 = class {
                    [v20](a23) {
                    }
                }
                return v10;
            }
            Object.defineProperty(v10, "valueOf", { configurable: true, enumerable: true, value: f11 });
            v10[8] = v10;
            return v10;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v24 = new F4();
    class C25 {
        static [v24](a27, a28, a29) {
        }
    }
    return F4;
}
const v33 = new Worker(f0, { type: "function" });
v33.getMessage("function", "function", Worker, v33);
