function f1() {
    return 4294967296;
}
let v3 = f1.bind(4294967296);
const v6 = Symbol.iterator;
const v13 = {
    [v6]() {
        v3();
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array(882);
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17();
f17();
%OptimizeFunctionOnNextCall(f17);
f17();
