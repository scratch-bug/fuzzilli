class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        class C10 extends Uint32Array {
        }
        const v12 = [-28740];
        class C13 {
            get a() {
                return v12;
            }
        }
        C0.g = C13;
        const v15 = new C13();
        const v16 = new C13();
        function F18(a20, a21, a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = -1;
            a23.constructor;
            this.e = C13;
            this.h = v16;
            this.g = a20;
        }
        try { F18.apply(F18, F18); } catch (e) {}
        new F18(v12, -1, v15, -9007199254740992n);
        return this;
    }
    f5(f5, a3, a4);
    %OptimizeFunctionOnNextCall(f5);
}
const v28 = new F1();
new F1(F1, v28);
new F1();
