function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = new SharedArrayBuffer(229, { maxByteLength: 229 });
            const v12 = new Uint8ClampedArray(v10);
            function f13(a14) {
                const v16 = new Int16Array(a14);
                return v16;
            }
            v12.constructor = f13;
            const t11 = v12.constructor;
            t11(v12);
            return Uint8ClampedArray;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0();
v19.toString(F0, v19, v19, F0, v19);
