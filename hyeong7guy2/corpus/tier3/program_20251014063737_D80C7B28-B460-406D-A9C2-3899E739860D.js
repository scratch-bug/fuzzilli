function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a12;
            }
            class C16 extends Uint16Array {
            }
            class C17 extends C16 {
            }
            const v18 = new C17();
            v18.constructor = f14;
            const v19 = class {
            }
        }
        new F8(a5, a2, F0, a5);
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
new F0();
new F0(v22, F0);
