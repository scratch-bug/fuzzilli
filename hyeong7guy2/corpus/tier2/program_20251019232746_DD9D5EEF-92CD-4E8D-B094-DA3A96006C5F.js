function f0() {
    return f0;
}
class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        class C11 extends Uint32Array {
        }
        const v13 = [-28740];
        class C14 {
            get a() {
                return v13;
            }
        }
        C1.g = C14;
        const v16 = new C14();
        const v17 = new C14();
        new ArrayBuffer(a8);
        new Float32Array();
        function F23(a25, a26, a27, a28) {
            if (!new.target) { throw 'must be called with new'; }
            Object.defineProperty(this, "h", { writable: true, value: f0 });
            this.e = -1;
            a28.constructor;
            this.e = C14;
            this.h = v17;
            this.g = a25;
        }
        F23[2] = C11;
        try { F23.apply(F23, F23); } catch (e) {}
        new F23(v13, -1, v16, -9007199254740992n);
        return f0;
    }
    f6(C1, f6, this);
    %OptimizeFunctionOnNextCall(f6);
}
const v33 = new F2(C1, C1);
const v34 = new F2();
new F2(v33, v34);
