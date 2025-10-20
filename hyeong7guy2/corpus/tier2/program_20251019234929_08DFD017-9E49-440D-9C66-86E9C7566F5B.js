let v0 = [2034945629,-18246,-9];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = { a: 1.1 };
            const v10 = v0++;
            const v11 = v10 >>> v10;
            v9.a;
            return v11;
        }
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1(F1, v0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
