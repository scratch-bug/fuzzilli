const v1 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            let v9 = 65536n;
            v9--;
            const v11 = v1.constructor;
            const v12 = v11(v11, f6);
            v12.length;
            let v14;
            try { v14 = v12.forEach(-2.2250738585072014e-308); } catch (e) {}
            v14 ?? v14;
            eval();
            return this;
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v18 = new F2();
v18.toString();
v18.toString();
