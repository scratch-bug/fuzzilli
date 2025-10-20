const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        Object.setPrototypeOf(Object, Object()).preventExtensions();
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array(Date);
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17.call(882, 882, Date, Int16Array);
f17();
%OptimizeFunctionOnNextCall(f17);
f17();
