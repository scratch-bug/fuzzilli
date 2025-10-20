Date[2] = -1.7976931348623157e+308;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v13 = new ArrayBuffer(3725, { maxByteLength: 3725 });
            const v15 = new Float32Array(v13);
            v15.set(Date);
            return f6;
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2(-1.7976931348623157e+308, Date);
v17.toString(-1.7976931348623157e+308, v17, -1.7976931348623157e+308, -1.7976931348623157e+308);
