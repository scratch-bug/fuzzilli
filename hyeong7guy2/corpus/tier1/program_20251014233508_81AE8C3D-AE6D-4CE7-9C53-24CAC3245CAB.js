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
                return a2;
            }
            function f18(a19) {
                const v21 = Math.atanh(this);
                v21 ^ v21;
                return a11;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, get: f17, set: f18 });
            const v23 = class {
            }
            function F24(a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                function f28(a29, a30) {
                    return a7;
                }
                a27.constructor = f28;
            }
            new F24(v23, C16);
        }
        const v32 = new F8(this, F0, F0, a6);
        return v32;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v34 = new F0(F0, F0);
new F0(v34, v34);
new F0(F0, v34);
