function f1(a2) {
    return a2 >= a2;
}
f1(536870888n);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v12 = [a11];
            v12[4] | 7;
            const v16 = new f1();
            try { v16.findLast(a8, v12, v16, f10); } catch (e) {}
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v20 = new F5();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
