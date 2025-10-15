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
                Math.atanh(a19 || 9007199254740990);
                return a13;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, get: f17, set: f18 });
            const v24 = class {
            }
            function F25(a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                function f29(a30, a31) {
                    return a5;
                }
                a28.constructor = f29;
            }
            new F25(v24, C16);
        }
        new F8();
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
