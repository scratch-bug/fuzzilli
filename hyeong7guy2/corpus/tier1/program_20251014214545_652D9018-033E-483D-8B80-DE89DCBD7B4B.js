const v2 = new Uint16Array(10);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            v2[4] = f8;
            -9007199254740990 >> a5;
        }
        f8(this);
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v14 = new F3();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
