class C0 {
    #valueOf(a2, a3) {
    }
}
class C4 extends C0 {
}
const v5 = new C4();
function f6(a7, a8, a9) {
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        function f14() {
            function f15(a16) {
                try { a16(a16); } catch (e) {}
                const t13 = a16.constructor;
                new t13();
                return f15;
            }
            return f15;
        }
        Object.defineProperty(this, "toString", { get: f14 });
    }
    const v20 = new F10();
    const t22 = v20.toString;
    t22(v5);
    return f6;
}
const v23 = f6.call();
f6();
%OptimizeMaglevOnNextCall(f6);
f6(C0, f6, v23);
