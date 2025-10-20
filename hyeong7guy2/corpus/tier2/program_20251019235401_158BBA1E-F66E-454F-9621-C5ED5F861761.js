function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function f10() {
            return this;
        }
        eval();
        class C13 extends f10 {
        }
        function f14() {
            function f15(a16) {
                try { a5(a8, a16, F0, a16, ...a16, a16); } catch (e) {}
                return f15;
            }
            return f15;
        }
        function f18(a19) {
            return f18;
        }
        Object.defineProperty(C13, "constructor", { get: f14, set: f18 });
        const v20 = C13.constructor;
        v20(a5, F2, v20, C13);
        return f14;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
