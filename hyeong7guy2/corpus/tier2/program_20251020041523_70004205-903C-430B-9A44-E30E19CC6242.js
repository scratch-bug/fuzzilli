function f0(a1, a2, a3) {
    const v4 = /Ra(?=bbb|bb)c/dgi;
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a8;
            }
            function f16(a17) {
                return a17;
            }
            v4.test();
            Object.defineProperty(this, "e", { get: f15, set: f16 });
        }
        const v19 = new F9(F9, this, F9, this);
        const t16 = v19.e;
        new t16();
    }
    new F5(F5, F5);
    return a3;
}
const v26 = new Worker(f0, { type: "function" });
v26.getMessage();
