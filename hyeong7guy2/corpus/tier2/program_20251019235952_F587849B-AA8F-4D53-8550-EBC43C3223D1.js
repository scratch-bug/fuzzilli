function f0(a1) {
    return a1 - a1;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            f8[4] | 7;
            const v13 = new f0(f7);
            return v13.constructor();
        }
        f8(f7);
        f8(F3);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v17 = new F3();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
