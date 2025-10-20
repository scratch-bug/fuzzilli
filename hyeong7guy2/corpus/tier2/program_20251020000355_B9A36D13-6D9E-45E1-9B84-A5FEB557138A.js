const v0 = [-1000.0,3.0,-2.2250738585072014e-308,5.0,-2.0,0.0];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                return f6;
            }
            const v16 = {
                construct(a10, a11) {
                    a10.length = a10;
                    function f12(a13, a14) {
                    }
                    a10.toString = f12;
                    a10.toString();
                    return a3;
                },
            };
            try { v16.construct(v0); } catch (e) {}
            v16.construct(f8);
        }
        f6();
        f6(v0);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v21 = new F1(v0, F1);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
