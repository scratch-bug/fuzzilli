const v3 = Symbol.iterator;
const v20 = {
    [v3]() {
        function f5() {
            function f6() {
                const v9 = ("🙌🏿").fontsize();
                v9.fontcolor(Symbol);
                ("MIN_SAFE_INTEGER")[v9];
                return v9;
            }
            return ({ construct: f6 }).construct(this);
        }
        f5();
        %PrepareFunctionForOptimization(f5);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        const v19 = {
            next() {
                return { done: 10 };
            },
        };
        return v19;
    },
};
const v23 = new Int16Array();
function f24() {
    new Date(WeakSet, Date, 882, ...v23, ...v20);
    return f24;
}
f24();
f24();
