function f1() {
    return f1;
}
const v2 = class extends f1 {
}
const v6 = Symbol.iterator;
const v12 = {
    [v6]() {
        const v11 = {
            next() {
                v2.h %= "object";
                return { done: 10 };
            },
        };
        return v11;
    },
};
function f14() {
    new Date(WeakSet, Date, 882, ...v12, ...v12);
    return Date;
}
f14();
f14.call(WeakSet, Symbol);
%OptimizeFunctionOnNextCall(f14);
f14();
