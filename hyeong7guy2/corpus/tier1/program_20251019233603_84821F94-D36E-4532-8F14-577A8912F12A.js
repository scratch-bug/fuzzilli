function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return a3;
        }
        function f9() {
            function f10() {
                gc();
                return { done: true };
            }
            return { next: f10 };
        }
        const v17 = Symbol.iterator;
        f8.bind(null, ...{ [v17]: f9 });
        function F21(a23, a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            const v30 = new Proxy(Date, {});
            class C31 extends v30 {
                static {
                    new this();
                }
            }
        }
        new F21();
        return F0;
    }
    f4(a2, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v37 = new F0(F0, F0);
const t32 = v37.constructor;
new t32(v37);
