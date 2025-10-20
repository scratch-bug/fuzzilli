class C0 {
}
const v2 = [-1000000000.0,1.7685704563380026e+308,0.0];
const v6 = Symbol.iterator;
const v13 = {
    [v6]() {
        eval(v2);
        [C0,Symbol] = v2;
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array(882, C0);
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17.call();
f17();
%OptimizeFunctionOnNextCall(f17);
f17();
