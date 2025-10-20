class C1 {
}
class C2 extends C1 {
}
C2[10] = Array;
const v6 = Symbol.iterator;
const v24 = {
    [v6]() {
        for (let [i13, i14] = (() => {
                const v11 = 10 / (10 >> 10);
                function f12() {
                    return this;
                }
                return [v11, 10];
            })();
            C2[i14], i13 < i14;
            ) {
        }
        const v23 = {
            next() {
                return { done: 10 };
            },
        };
        return v23;
    },
};
const v27 = new Int16Array();
function f28() {
    const v29 = new Date(WeakSet, Date, 882, ...v27, ...v24);
    return v29;
}
f28();
f28();
%OptimizeFunctionOnNextCall(f28);
f28();
