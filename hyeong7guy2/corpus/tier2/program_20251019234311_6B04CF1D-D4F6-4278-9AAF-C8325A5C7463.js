function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = new Int32Array(512);
            function f11(a12) {
                v10[7];
                return a12;
            }
            f11();
            f11(v10);
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
v16.toString(F0, v16, v16);
class C18 {
    static [v16](a20, a21, a22) {
    }
    static [v16](a24, a25, a26) {
    }
}
