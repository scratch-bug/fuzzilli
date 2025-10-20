function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            const v11 = new Int8Array();
            const v14 = new Uint32Array(536870912);
            v14[2];
            function f16(a17) {
                (-1e-15).toLocaleString();
                return f9;
            }
            new Uint32Array(1073741824);
            Object.defineProperty(v11, "valueOf", { configurable: true, enumerable: true, value: f16 });
            v11[8] = v11;
            return a3;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v21 = new F5(F5, f1);
    const v23 = gc();
    class C24 {
        static [v21](a26, a27, a28) {
        }
    }
    return v23;
}
const v32 = new Worker(f1, { type: "function" });
v32.getMessage();
