function f0(a1) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = typeof F2;
    class C7 {
    }
    C7[v6];
    return f0;
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            const v16 = f14[4];
            v16 | 7;
            new f0(v16);
        }
        f14();
        f14();
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v22 = new F9(f0, f0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
