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
                return a13;
            }
            function f18(a19) {
                const v23 = Math.atanh(a19 + 9007199254740990);
                v23 ^ v23;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, get: f17, set: f18 });
            const v25 = class {
            }
            function F26(a28, a29) {
                if (!new.target) { throw 'must be called with new'; }
                function f30(a31, a32) {
                    return a31;
                }
                a29.constructor = f30;
            }
            new F26(v25, C16);
        }
        new F8();
        return a6;
    }
    f4(f4, a2, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v36 = new F0();
const v37 = new F0(v36, v36);
new F0(v37, v37);
