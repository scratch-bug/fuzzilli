function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v11 = new ArrayBuffer(7, { maxByteLength: 13 });
            v11.resize();
            const v14 = new Int8Array(v11);
            v14.reverse();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
