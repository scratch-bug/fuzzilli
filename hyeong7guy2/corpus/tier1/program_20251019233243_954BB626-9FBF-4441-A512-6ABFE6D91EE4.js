function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return f8;
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
            class C28 extends Array {
                static {
                    new this(a7, Array);
                }
                #p(a32, a33, a34) {
                }
            }
        }
        new F21(a6, F0, F21, f4);
        return F0;
    }
    f4(this, f4, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v38 = new F0();
const t33 = v38.constructor;
new t33();
