const v2 = new Float32Array(3);
v2.lastIndexOf(3);
const v4 = [-2147483648,4,-1266721465,8,9223372036854775807];
const v6 = [Float32Array,Float32Array];
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            const v14 = v6.constructor;
            const v15 = v14(v14, f11);
            try { v15.findIndex(v14); } catch (e) {}
            let v17 = v15.length;
            v17--;
            let v19;
            try { v19 = v15.forEach(-2.2250738585072014e-308); } catch (e) {}
            v19 ?? v19;
            const v22 = eval();
            v22 ?? v22;
            return v4;
        }
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v24 = new F7(v6, F7);
v24.toString();
v24.toString();
