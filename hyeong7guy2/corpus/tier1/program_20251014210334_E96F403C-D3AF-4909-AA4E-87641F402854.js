class C1 extends Array {
}
let v2;
try { v2 = C1.find(C1, Array, Array); } catch (e) {}
const v3 = new C1();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            v3[1] **= v2;
        }
        f9(f9);
        f9(f8);
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v13 = new F4(C1, F4);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
