function f0(a1, a2) {
    return a1;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a5.constructor = f0;
    function f7(a8, a9, a10) {
        function f11() {
            return f7;
        }
        function f12(a13, a14) {
            return a5;
        }
        f11.constructor = f12;
        class C15 extends f11 {
        }
        C15.constructor;
        return C15;
    }
    f7(a6, F3, a5);
    %OptimizeFunctionOnNextCall(f7);
}
const v18 = new F3(F3);
const v19 = v18.constructor;
new v19(F3);
new v19(v18);
