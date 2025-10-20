Date[0] = 25;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v13 = new ArrayBuffer(3725, { maxByteLength: 3725 });
            const v15 = new Float32Array(v13);
            return v15.set(Date);
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
