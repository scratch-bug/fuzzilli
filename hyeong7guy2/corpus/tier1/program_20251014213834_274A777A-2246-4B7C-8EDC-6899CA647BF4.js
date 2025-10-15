function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            class C17 extends Uint16Array {
            }
            class C18 extends C17 {
            }
            function f19() {
                return a12;
            }
            function f20(a21) {
                this ^ Math.atanh(92);
                return 92;
            }
            Object.defineProperty(C18, "constructor", { configurable: true, get: f19, set: f20 });
            const v25 = class {
            }
            function F26(a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
                a29.constructor = 42212;
            }
            new F26(v25, C18);
        }
        const v31 = new F10();
        return v31;
    }
    f6(this, f6, this);
    %OptimizeFunctionOnNextCall(f6);
}
const v33 = new F2(F2, F2);
const v34 = new F2(v33, 92);
new F2(v34, v33);
