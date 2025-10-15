function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            ("2147483647").charAt(-1098098658);
        }
        f5(f5);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
const v13 = v12.toString;
v13(v12, F0, v13, v12);
class C15 {
    static [v12](a17, a18, a19) {
    }
}
