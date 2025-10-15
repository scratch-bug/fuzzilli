function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 extends Uint16Array {
            }
            class C16 extends C15 {
            }
            function f17(a18) {
                return f17;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, enumerable: true, value: f17 });
            const v19 = class {
            }
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function f24() {
                    return F0;
                }
                a23.constructor = f24;
            }
            new F20(v19, C16);
        }
        const v26 = new F8(a2, F8, a2, a5);
        return v26;
    }
    f4(this, F0, F0);
    %OptimizeFunctionOnNextCall(F0);
}
new F0();
const v29 = new F0();
new F0(F0, v29);
