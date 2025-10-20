const v1 = [0];
v1[6] = 0;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            return v1.push({});
        }
        f7(f6);
        f7(v1);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
