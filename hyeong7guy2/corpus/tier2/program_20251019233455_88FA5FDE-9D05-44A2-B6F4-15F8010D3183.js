function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v8 = new ArrayBuffer(a3, { maxByteLength: 142 });
        const v10 = new Uint8Array(v8);
        function f11(a12) {
        }
        f11.apply(v8, v10);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
