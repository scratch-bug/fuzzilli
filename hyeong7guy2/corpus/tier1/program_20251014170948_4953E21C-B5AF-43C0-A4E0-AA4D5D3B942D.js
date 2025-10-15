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
                return f4;
            }
            function f18(a19) {
                const v23 = Math.atanh(a19 || 9007199254740990);
                new Int32Array();
                return v23 ^ v23;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, get: f17, set: f18 });
            const v27 = class {
            }
            function F28(a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
                function f32(a33, a34) {
                    return a33;
                }
                a31.constructor = f32;
            }
            new F28(v27, C16);
        }
        new F8(a6, F8, a5, F0);
        return f4;
    }
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v38 = new F0();
new F0(F0, v38);
new F0();
