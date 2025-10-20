const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        const v7 = Math.sign(127);
        const v12 = {
            next() {
                v7 in this;
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17();
f17();
%OptimizeFunctionOnNextCall(f17);
f17();
