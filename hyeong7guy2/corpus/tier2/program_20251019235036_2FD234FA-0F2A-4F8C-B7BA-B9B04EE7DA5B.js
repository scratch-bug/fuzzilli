function f1(a2) {
    a2 & a2;
    return a2 ^ a2;
}
f1(536870888n);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            f11[4] | 7;
            const v16 = new f1();
            try { v16.findLast(); } catch (e) {}
        }
        f11();
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v20 = new F6();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
