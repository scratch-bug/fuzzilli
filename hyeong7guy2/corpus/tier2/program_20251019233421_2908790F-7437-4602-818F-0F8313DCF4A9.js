function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v11 = Uint8Array.of(59, 32)[1];
            v11 * v11;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
v13.toString(F0, F0, F0, F0);
class C15 {
    static [v13](a17, a18, a19) {
    }
}
