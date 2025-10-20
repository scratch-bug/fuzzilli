const v1 = ("dO7").fontsize("dO7", "dO7", "dO7", "dO7", "dO7");
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            WeakMap[a5] &&= 2147483649;
            return a9;
        }
        f8(f8);
        f8(this);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v13 = new F3(v1);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
