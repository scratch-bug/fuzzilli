const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
const v3 = new Float64Array(536870912);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const v11 = v3[599];
            const v12 = {};
            try { v12(); } catch (e) {}
            return v11;
        }
        f9();
        f9(v1);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v16 = new F4();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
