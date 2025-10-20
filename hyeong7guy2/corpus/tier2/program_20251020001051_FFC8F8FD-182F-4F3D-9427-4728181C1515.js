function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            new Uint32Array(1073741824);
            return a7;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v12 = new F5(1073741824, 1073741824);
    for (let i14 = 0; i14 < 25000; ++i14) {
    }
    class C20 {
        static [v12](a22, a23, a24) {
        }
    }
    return 1073741824;
}
const v28 = new Worker(f1, { type: "function" });
v28.getMessage(Worker);
