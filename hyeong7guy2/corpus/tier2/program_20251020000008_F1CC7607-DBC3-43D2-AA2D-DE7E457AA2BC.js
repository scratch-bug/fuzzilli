function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            Uint8Array.of(36, 127, 236, 179, 132, 227, 116).toHex();
            return 236;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
const t12 = v17.toString;
t12();
