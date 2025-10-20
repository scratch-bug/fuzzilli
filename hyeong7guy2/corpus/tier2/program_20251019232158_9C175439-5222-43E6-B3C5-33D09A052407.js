function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v11 = new SharedArrayBuffer(16, { maxByteLength: 229 });
            const v13 = new Uint8ClampedArray(v11);
            function f14() {
                return 229;
            }
            f14.apply(v11, v13);
            return f4;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
v16.toString(v16);
