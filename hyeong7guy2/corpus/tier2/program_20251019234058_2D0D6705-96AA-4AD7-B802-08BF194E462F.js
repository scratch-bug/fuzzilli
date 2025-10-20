const v0 = [];
const v2 = new Set();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        class C11 {
        }
        C11.h = a6;
        C11.h = C11;
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            v2.keys(...v0);
        }
        new F12();
        return f7;
    }
    f7.call();
    %OptimizeFunctionOnNextCall(f7);
}
new F3();
const v22 = new F3(Set, v0);
const t21 = v22.constructor;
new t21();
