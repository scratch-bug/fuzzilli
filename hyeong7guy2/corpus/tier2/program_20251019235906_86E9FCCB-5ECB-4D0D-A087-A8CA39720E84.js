function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return this;
        }
        eval(a3);
        class C11 extends f8 {
        }
        function f12() {
            const v13 = [a6,a6,a6,a6];
            for (let v15 = 0; v15 < 5; v15++) {
                v13["some"](Object);
            }
            function f18(a19) {
                return f18;
            }
            return this;
        }
        function f20(a21) {
            return a21;
        }
        Object.defineProperty(C11, "constructor", { get: f12, set: f20 });
        C11.constructor;
        return a7;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0(F0, F0);
