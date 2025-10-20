const v4 = new ArrayBuffer(7, { maxByteLength: 13 });
const v6 = new Int8Array(v4);
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            new Uint8Array(v6);
            return a9;
        }
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v16 = new F7();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
