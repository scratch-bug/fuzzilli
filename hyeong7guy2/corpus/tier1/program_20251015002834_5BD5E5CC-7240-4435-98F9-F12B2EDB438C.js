let v0 = [2034945629,-18246,-9];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            f6[4] | 7;
            const v12 = { a: 1.1 };
            v0++;
            v12.a;
            return a7;
        }
        f6();
        f6(a3);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v17 = new F1();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
