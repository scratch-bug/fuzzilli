const v3 = Symbol.iterator;
const v19 = {
    [v3]() {
        for (let [i9, i10] = (() => {
                const v7 = 10 >> 10;
                return [v7 / v7, 10];
            })();
            i9 < i10;
            ) {
        }
        const v18 = {
            next() {
                return { done: 10 };
            },
        };
        return v18;
    },
};
const v22 = new Int16Array();
function f23() {
    const v24 = new Date(WeakSet, Date, 882, ...v22, ...v19);
    return v24;
}
f23();
f23();
%OptimizeFunctionOnNextCall(f23);
f23();
