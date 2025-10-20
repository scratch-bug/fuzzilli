function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = new SharedArrayBuffer(1);
            const v11 = new Uint8ClampedArray(v9);
            return v11.fill();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
v13.toString();
