function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            new Uint32Array(536870912);
            new Uint32Array(1073741824);
            return Uint32Array;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    for (let i15 = 0; i15 < 100000; ++i15) {
    }
    const v21 = new F5(f1, 1073741824);
    class C22 {
        static [v21](a24, a25, a26) {
        }
    }
    return a2;
}
const v30 = new Worker(f1, { type: "function" });
v30.getMessage("function");
