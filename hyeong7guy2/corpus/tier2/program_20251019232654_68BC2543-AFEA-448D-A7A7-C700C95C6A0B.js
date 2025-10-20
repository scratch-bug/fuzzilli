function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            const v12 = new SharedArrayBuffer();
            new Uint8Array(v12);
            new Int8Array(4294967295);
            new Uint32Array(536870912);
            new Uint32Array(1073741824);
            return a2;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v21 = new F5();
    const v23 = gc();
    class C24 {
        static [v21](a26, a27, a28) {
        }
    }
    return v23;
}
const v31 = { type: "function" };
const v32 = new Worker(f1, v31);
v32.getMessage(v31, v32, f1, v31, f1);
