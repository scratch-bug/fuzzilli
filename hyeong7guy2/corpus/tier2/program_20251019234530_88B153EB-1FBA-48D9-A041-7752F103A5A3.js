function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 extends Uint16Array {
            }
            class C16 extends C15 {
            }
            function f17() {
                return a12;
            }
            function f18(a19) {
                Math.atanh();
                return a2;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, get: f17, set: f18 });
            const v22 = class {
            }
            function F23(a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                function f27(a28, a29) {
                    v22.b = f27;
                    return a28;
                }
                a26.constructor = f27;
            }
            new F23(v22, C16);
        }
        new F8(f4, a2, a3, F8);
        return a7;
    }
    f4(F0, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v33 = new F0(F0, F0);
new F0(v33, v33);
new F0();
