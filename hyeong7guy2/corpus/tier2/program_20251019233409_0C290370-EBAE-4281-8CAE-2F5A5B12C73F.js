function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = new SharedArrayBuffer(229, { maxByteLength: 229 });
            const v12 = new Uint8ClampedArray(v10);
            v12[167] = v12;
            function f13(a14) {
                a14.reverse(F0, f4);
                return f4;
            }
            v12.constructor = f13;
            const t12 = v12.constructor;
            t12(v12);
            return f5;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
v18.toString();
