function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = { maxByteLength: 229 };
            const v10 = new SharedArrayBuffer(229, v9);
            const v12 = new Uint8ClampedArray(v10);
            v12[167] = a6;
            return v9;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0();
v13.toString();
