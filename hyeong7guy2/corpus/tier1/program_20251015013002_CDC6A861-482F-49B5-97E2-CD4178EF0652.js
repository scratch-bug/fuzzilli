const v2 = new Uint32Array(1024);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            v2[599];
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v13 = new F3();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
