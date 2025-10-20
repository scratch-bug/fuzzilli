const v2 = new Uint8ClampedArray(956);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            try { a9(); } catch (e) {}
            v2[10] /= a9;
        }
        f8(f8);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v12 = new F3(v2, v2);
class C13 {
    static [v12](a15, a16, a17) {
    }
}
