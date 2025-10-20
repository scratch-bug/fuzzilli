function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = new SharedArrayBuffer(229, { maxByteLength: 229 });
            const v12 = new Uint8ClampedArray(v10);
            const t6 = v12.constructor;
            new t6(v12);
            return f5;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
v15.toString(F0, F0);
