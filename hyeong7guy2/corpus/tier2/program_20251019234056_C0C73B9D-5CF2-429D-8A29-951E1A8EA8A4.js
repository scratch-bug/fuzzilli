function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f8(a9, a10) {
                return a9 + a9;
            }
            f8(f8, f8("2147483647"));
        }
        f5(a3);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
