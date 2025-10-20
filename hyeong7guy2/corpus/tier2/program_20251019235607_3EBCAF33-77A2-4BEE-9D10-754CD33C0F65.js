function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a6;
        }
        const v7 = %WasmArray();
        v7[4294967295];
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v9 = new F0();
class C10 {
    static [v9](a12, a13, a14) {
    }
}
