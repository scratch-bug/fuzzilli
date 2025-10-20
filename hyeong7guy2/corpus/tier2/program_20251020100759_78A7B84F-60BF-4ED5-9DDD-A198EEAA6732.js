const v4 = Symbol.iterator;
const v15 = {
    [v4]() {
        const v14 = {
            next() {
                for (const v8 of "toJSON") {
                    const v9 = Symbol.dispose;
                    const v11 = {
                        [v9]() {
                        },
                    };
                    using v12 = v11;
                }
                return { done: 5 };
            },
        };
        return v14;
    },
};
function f17() {
    new Date(WeakSet, Date, 882, ...v15, ...v15);
    return WeakSet;
}
f17();
f17.call();
%OptimizeFunctionOnNextCall(f17);
f17();
