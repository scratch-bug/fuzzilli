const v3 = Symbol.iterator;
const v17 = {
    [v3]() {
        function f6() {
            const v8 = ("🙌🏿").fontsize();
            const v9 = v8[14];
            v8.replaceAll(v9).toWellFormed();
            return v9;
        }
        ({ construct: f6 }).construct();
        const v16 = {
            next() {
                return { done: 10 };
            },
        };
        return v16;
    },
};
function f19() {
    new Date(WeakSet, Date, 882, ...v17, ...v17);
    return WeakSet;
}
f19.call(v17, v3, WeakSet, WeakSet, f19);
f19();
%OptimizeFunctionOnNextCall(f19);
f19();
