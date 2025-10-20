function f0() {
    return f0;
}
const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        const v7 = [0.412802920877953];
        v7.length = 10;
        v7.find(f0);
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v15, ...v12);
    return v17;
}
f16.call(v12, Symbol);
f16();
%OptimizeFunctionOnNextCall(f16);
for (let i22 = 0, i23 = 10; i23; i23--) {
}
f16();
