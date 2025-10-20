const v1 = new Uint8ClampedArray();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = v1.length;
            return v9 >>> v9;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2();
class C15 extends Uint8Array {
    static [v13](a17, a18, a19) {
    }
}
