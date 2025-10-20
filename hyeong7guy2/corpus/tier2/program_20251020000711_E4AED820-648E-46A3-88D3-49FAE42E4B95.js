function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v11 = new SharedArrayBuffer(1, { maxByteLength: 16 });
            const v13 = new Uint8ClampedArray(v11);
            v13.fill();
            return 16;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
v15.toString();
