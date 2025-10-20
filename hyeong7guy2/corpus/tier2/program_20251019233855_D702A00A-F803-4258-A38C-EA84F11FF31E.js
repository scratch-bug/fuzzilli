function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const t5 = d8.debugger.enable;
                t5();
                return d8;
            }
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v15 = new F4();
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
    return a3;
}
const v24 = new Worker(f0, { type: "function" });
function f25(a26) {
    return v24;
}
new Worker(f25, { type: "function" });
