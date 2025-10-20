function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v12 = new ArrayBuffer(1507, { maxByteLength: 1507 });
            const v14 = new Int32Array(v12);
            v14.indexOf(0.0);
            return a7;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
