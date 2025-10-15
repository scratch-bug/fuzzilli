function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            ("2147483647").codePointAt(f6);
            v8 = 256;
            function f11(a12) {
                return 256;
            }
            class C13 extends f11 {
                7 = v8;
            }
            return 256;
        }
        f6(F1);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(256, 256);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
