function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v11 = new SharedArrayBuffer(a4, { maxByteLength: 229 });
            const v13 = new Uint8ClampedArray(v11);
            function f14() {
                return v13;
            }
            f14.apply(f0, v13);
            return F1;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
v16.toString();
