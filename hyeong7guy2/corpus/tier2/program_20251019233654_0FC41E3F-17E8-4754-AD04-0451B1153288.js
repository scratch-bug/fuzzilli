const v1 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            let v9;
            try { v9 = v1.n(); } catch (e) {}
            Math.abs(-1.0504053504533855e+308);
            return v9;
        }
        f7(f7(this));
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v14 = new F2(-1.0504053504533855e+308, -1.0504053504533855e+308);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
