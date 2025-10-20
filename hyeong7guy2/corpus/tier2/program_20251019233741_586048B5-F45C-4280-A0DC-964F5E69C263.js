const v1 = /\P{Decimal_Number}/dsvi;
try { v1.compile(v1, "number"); } catch (e) {}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            -4294967296 <= -4294967296;
        }
        f8(f8(f8));
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v14 = new F3(F3, v1);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
