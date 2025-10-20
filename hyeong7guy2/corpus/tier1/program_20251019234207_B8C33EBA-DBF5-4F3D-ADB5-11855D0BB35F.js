function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return F0;
        }
        function f9() {
            function f10() {
                gc();
                return { done: true };
            }
            return { next: f10 };
        }
        const v17 = Symbol.iterator;
        const t14 = f8.bind(null, ...{ [v17]: f9 });
        const v21 = new t14(Symbol, f4, a6);
        return v21;
    }
    f4(F0, f4, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0();
const v24 = new F0(F0, v23);
const t23 = v24.constructor;
new t23();
