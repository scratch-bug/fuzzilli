function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            class C16 extends Uint16Array {
            }
            class C17 extends C16 {
            }
            const v18 = new C17();
            const v19 = class {
            }
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                const t14 = a24.constructor;
                new t14();
                this.b = Int16Array;
                function F27() {
                    if (!new.target) { throw 'must be called with new'; }
                    const v30 = Temporal.PlainMonthDay;
                    try { v30(); } catch (e) {}
                }
                new F27();
            }
            new F21(v19, v18);
            this.e = -1;
        }
        new F9(a6, a7, -1, a2);
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v37 = new F0();
new F0(v37, v37);
