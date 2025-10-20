function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v11 = new SharedArrayBuffer(4096, { maxByteLength: 4096 });
            const v13 = new Uint32Array(v11);
            v13.indexOf();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
