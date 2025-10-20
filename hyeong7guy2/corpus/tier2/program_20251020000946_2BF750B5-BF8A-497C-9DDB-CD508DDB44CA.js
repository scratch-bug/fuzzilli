function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return f8;
        }
        class C9 extends f8 {
        }
        function f10() {
            const v11 = [f4];
            for (let v13 = 0; v13 < 5; v13++) {
                `string${v11["some"](Object)}undefined`;
            }
            return F0;
        }
        function f17(a18) {
            return a5;
        }
        Object.defineProperty(C9, "constructor", { get: f10, set: f17 });
        C9.constructor;
        return f8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
