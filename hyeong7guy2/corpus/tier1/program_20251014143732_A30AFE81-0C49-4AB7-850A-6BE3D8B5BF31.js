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
                return f17;
            }
            function f18(a19) {
                const v23 = Math.atanh(a19 || 9007199254740990);
                v23 ^ v23;
                return this;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, get: f17, set: f18 });
            const v25 = class {
            }
            function F26(a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
                function f30(a31, a32) {
                    return a32;
                }
                a29.constructor = f30;
            }
            new F26(v25, C16);
        }
        new F8(F0, f4, a7, F0);
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v37 = new F0();
new F0(F0, v37);
