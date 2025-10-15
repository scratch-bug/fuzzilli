const v1 = Temporal.Duration;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        class C10 {
        }
        const v11 = new C10();
        v11.constructor = v1;
        const t8 = v11.constructor;
        const v13 = new t8();
        const v14 = new C10();
        v14.a = v13;
        v14.a;
        return C10;
    }
    f6(Temporal, a5, a4);
    %OptimizeFunctionOnNextCall(f6);
}
const v17 = new F2();
const v18 = new F2(Temporal, v17);
const t20 = v18.constructor;
new t20();
