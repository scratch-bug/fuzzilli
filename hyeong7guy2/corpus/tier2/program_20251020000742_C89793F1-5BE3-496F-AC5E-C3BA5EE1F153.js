function f0(a1) {
    a1 == a1;
    return f0;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v11 = ([a9,a9,a9,a9,a9])[4];
            const v13 = v11 | 7;
            const v14 = new f0();
            try { v14.findLast(v13, f8, v14, v11); } catch (e) {}
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v18 = new F3();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
