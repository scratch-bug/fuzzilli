const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v8 = {
            next() {
                return { done: 10 };
            },
        };
        let v11 = Math.round(-830387.4765292236);
        v11--;
        Date.parse(v11);
        return v8;
    },
};
function f16() {
    new Date(WeakSet, Date, 882, ...v14, ...v14);
    return v14;
}
f16();
f16.call(Date);
%OptimizeFunctionOnNextCall(f16);
f16();
