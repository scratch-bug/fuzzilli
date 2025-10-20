function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = Int16Array;
}
const v5 = new F2(F2);
const t5 = v5.e;
const v7 = new t5(129);
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            const v19 = new ArrayBuffer(3725, { maxByteLength: 3725 });
            const v21 = new Float32Array(v19);
            v21.set(v7);
        }
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v23 = new F8();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
