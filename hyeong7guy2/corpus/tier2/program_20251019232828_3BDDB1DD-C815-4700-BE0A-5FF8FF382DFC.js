function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            typeof F0[Symbol.toStringTag] === "number";
            return a7;
        }
        f9(a7);
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v19 = new F4();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
