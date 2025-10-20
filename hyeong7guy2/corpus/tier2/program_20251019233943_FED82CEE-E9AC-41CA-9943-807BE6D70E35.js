function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            ("number").localeCompare();
            new Int8Array(4294967295);
            const v17 = new Uint32Array(536870912);
            v17[2];
            const v19 = new Uint32Array(1073741824);
            return v19;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v20 = new F5();
    gc();
    class C23 {
        static [v20](a25, a26, a27) {
        }
    }
    return v20;
}
const v31 = new Worker(f1, { type: "function" });
v31.getMessage(v31, "function", v31);
