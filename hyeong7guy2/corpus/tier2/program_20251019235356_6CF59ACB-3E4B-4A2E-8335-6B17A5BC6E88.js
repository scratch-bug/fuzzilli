const v1 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
function f2() {
    function f3() {
        return ([-1.7976931348623157e+308,1.1051103596204693e+308,-1000000000000.0,794.9295900746822,-6.721975590684144,2.606614414710057e+307,-5.0,-2.0,-2.0,-1e-15]).flat();
    }
    return f3;
}
Object.defineProperty(v1, "constructor", { enumerable: true, get: f2 });
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const t12 = v1.constructor;
            const v14 = t12();
            let v15;
            try { v15 = v14.forEach(-2.2250738585072014e-308); } catch (e) {}
            return v15;
        }
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v16 = new F6(v1, f2);
v16.toString();
v16.toString();
