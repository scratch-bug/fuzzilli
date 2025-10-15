function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return "🙌🏿";
        }
        function f10() {
            return f10;
        }
        Object.defineProperty(f10, Symbol.toPrimitive, { enumerable: true, value: f8 });
        class C13 extends f10 {
        }
        const v14 = `unit${C13}bigint`;
        function f15() {
            return f8;
        }
        const v16 = f15.constructor;
        try { v16(v14); } catch (e) {}
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
