const v1 = class {
    get e() {
    }
}
const v3 = new v1();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            v3.e %= -27379;
            return a10;
        }
        f9(f9());
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v13 = new F4();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
