function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v9 = new ArrayBuffer(8, { maxByteLength: 142 });
        const v11 = new Uint8Array(v9);
        function f12(a13) {
            return a2;
        }
        f12.apply(v9, v11);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
