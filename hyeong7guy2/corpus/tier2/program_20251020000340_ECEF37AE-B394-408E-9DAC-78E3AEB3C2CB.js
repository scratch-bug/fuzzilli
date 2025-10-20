const v0 = [];
function f1(a2) {
    const v5 = new Uint8ClampedArray(956);
    v5[601] = v5;
    v5[3] >>>= undefined;
    return f1;
}
const v7 = f1(v0);
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            v0.forEach(v7);
        }
        f13.call();
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v18 = new F8();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
