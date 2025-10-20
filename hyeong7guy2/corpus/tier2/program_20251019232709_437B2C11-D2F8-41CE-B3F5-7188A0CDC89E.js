const v2 = new Float64Array(4);
v2.fill();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const v12 = new SharedArrayBuffer();
            const v14 = new DataView(v12);
            try { v14.getInt32(); } catch (e) {}
        }
        f9.call();
        f9(f9);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v18 = new F4();
v18.toString(Float64Array, v18, v2, Float64Array, F4);
