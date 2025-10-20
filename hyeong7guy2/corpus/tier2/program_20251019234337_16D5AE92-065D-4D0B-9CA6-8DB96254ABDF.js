const v3 = Symbol.iterator;
const v9 = {
    [v3]() {
        const v8 = {
            next() {
                return { done: 10, ...Date };
            },
        };
        return v8;
    },
};
const v12 = new Int16Array();
function f13() {
    new Date(WeakSet, Date, 882, ...v12, ...v9);
    return v3;
}
f13();
f13();
%OptimizeFunctionOnNextCall(f13);
f13();
