let v0 = 3;
class C1 {
}
let v2 = -2.2250738585072014e-308;
v2--;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            v0 %= v2;
            try { a10.forEach(v2); } catch (e) {}
            return a6;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v14 = new F4();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
