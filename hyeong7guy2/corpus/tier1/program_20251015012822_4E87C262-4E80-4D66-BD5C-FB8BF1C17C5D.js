function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            v8--;
            let v10 = -3612;
            v10++;
            const v12 = ~"startsWith";
            const v13 = { value: v12 };
            eval();
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1(F1, F1);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
