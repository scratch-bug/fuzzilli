function f0(a1) {
    return a1;
}
const v2 = class extends f0 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v13 = ([a9,a9,a9])[4] | 7;
            new v2();
            return v13;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v17 = new F3(f0, F3);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
