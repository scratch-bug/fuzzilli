class C0 {
}
class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        a7.length = a7;
        class C11 extends Uint32Array {
        }
        class C13 {
        }
        C1.g = C13;
        const v14 = new C13();
        const t14 = v14?.constructor;
        new t14();
        const v17 = new C13();
        v17.a;
        function F19(a21, a22, a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            this.propertyIsEnumerable(a21, a4, C13);
            this.e = -1;
            this.e = C13;
            this.h = v17;
        }
        new F19();
        return C0;
    }
    f6(f6);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
const v29 = new F2();
const t33 = v29.constructor;
new t33();
