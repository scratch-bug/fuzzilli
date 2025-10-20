function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        const v9 = Symbol.iterator;
        const v15 = {
            [v9]() {
                this.b = this;
                const v14 = {
                    next() {
                        return { done: 10 };
                    },
                };
                return v14;
            },
        };
        const v17 = new Int16Array(this, 882, 882);
        function f18() {
            new Date(WeakSet, Date, 882, ...v17, ...v15);
            function f20(a21) {
                eval(a5);
                return f20;
            }
            return F2;
        }
        f18();
        %PrepareFunctionForOptimization(f18);
        %OptimizeFunctionOnNextCall(f18);
        f18();
        return this;
    }
    const v26 = class extends f6 {
    }
    new v26();
}
const v28 = new F2(F2, Symbol);
const t35 = v28.constructor;
new t35();
