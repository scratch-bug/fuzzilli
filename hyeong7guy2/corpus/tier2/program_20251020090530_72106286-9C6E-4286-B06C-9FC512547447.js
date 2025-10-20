const v3 = Symbol.iterator;
const v21 = {
    [v3]() {
        for (let [i11, i12] = (() => {
                const v7 = 10 >> 10;
                ~v7;
                let v9 = 10 ^ v7;
                v9++;
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
const v24 = new Int16Array();
function f25() {
    new Date(WeakSet, Date, 882, ...v24, ...v21);
    return v21;
}
f25();
f25();
%OptimizeFunctionOnNextCall(f25);
f25();
