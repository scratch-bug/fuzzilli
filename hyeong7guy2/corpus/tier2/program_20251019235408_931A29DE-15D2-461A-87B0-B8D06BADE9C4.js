function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v9 = new ArrayBuffer(512, { maxByteLength: 1638 });
        const v11 = new Int32Array(v9);
        v11.fill();
        return v9;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
v13.toString;
