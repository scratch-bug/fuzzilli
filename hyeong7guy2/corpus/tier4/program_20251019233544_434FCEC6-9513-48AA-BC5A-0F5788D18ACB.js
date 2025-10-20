function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new Map();
class C4 {
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        class C13 {
        }
        const v14 = new C13();
        function f15(a16) {
            this instanceof C4;
            return this;
        }
        v3["entries"](C13, ..."entries", F0, ..."entries");
        v14.constructor = f15;
        v14.constructor();
        return a12;
    }
    f9(a7, a8, this);
    %OptimizeFunctionOnNextCall(f9);
}
const v22 = new F5(F5, F5);
const v23 = new F5(F5, F0);
new F5(v23, v22);
