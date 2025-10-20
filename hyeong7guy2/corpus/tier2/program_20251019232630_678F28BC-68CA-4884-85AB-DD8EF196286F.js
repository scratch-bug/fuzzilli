function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1024n;
}
const v3 = [4,50521,256,509057908];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        v3.valueOf = f9;
        F1.c;
        function f14() {
            return a7;
        }
        function f15(a16, a17) {
            return this;
        }
        f14.constructor = f15;
        class C18 extends f14 {
        }
        eval();
        try { C18.call(); } catch (e) {}
        const t21 = C18.constructor;
        t21().isNaN();
    }
    f9();
    %OptimizeFunctionOnNextCall(f9);
}
const v26 = new F5();
const t28 = v26.constructor;
new t28();
const t30 = v26.constructor;
const v30 = new t30();
v30.constructor;
