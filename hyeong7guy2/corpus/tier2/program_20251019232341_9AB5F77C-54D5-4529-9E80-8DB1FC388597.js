const v3 = Symbol.iterator;
const v21 = {
    [v3]() {
        for (let [i11, i12] = (() => {
                for (let v6 = 0; v6 < 5; v6++) {
                }
                const v9 = 10 / (10 >> 10);
                v9 ^ v9;
                return [v9, 10];
            })();
            i11 < i12;
            ) {
        }
        const v20 = {
            next() {
                return { done: 10 };
            },
        };
        return v20;
    },
};
const v24 = new Int16Array(Date, 882, 882);
function f25() {
    const v26 = new Date(WeakSet, Date, 882, ...v24, ...v21);
    return v26;
}
f25();
f25();
%OptimizeFunctionOnNextCall(f25);
f25();
