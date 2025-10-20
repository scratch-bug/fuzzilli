const v1 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            try { v1.n(); } catch (e) {}
            let v10 = 16n;
            for (let i11 = v10; v10 <= 25000; ++v10) {
                i11 > i11;
                const v22 = {
                    toString(a19, a20, a21) {
                        return v10;
                    },
                };
            }
            return Math.abs(-1.0504053504533855e+308);
        }
        f7(a5);
        f7(f7);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v27 = new F2();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
