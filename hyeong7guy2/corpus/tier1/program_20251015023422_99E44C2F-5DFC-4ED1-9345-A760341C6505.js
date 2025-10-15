let v0 = [2034945629,-18246,-9];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v14 = {
                p(a9, a10, a11, a12) {
                    super.h;
                    return F1;
                },
            };
            v0++;
            return v0;
        }
        f6(f5);
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
