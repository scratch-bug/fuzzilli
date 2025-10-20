function f0() {
    return f0;
}
const v5 = Symbol.iterator;
const v21 = {
    [v5]() {
        const v20 = {
            next() {
                const v9 = { done: 10 };
                const v12 = (20000).constructor.isFinite(-9007199254740992);
                class C13 {
                }
                function f14(a15, a16, a17, a18) {
                    return f14;
                }
                f0(20000, f14, v12);
                return v9;
            },
        };
        return v20;
    },
};
const v24 = new Int16Array();
function f25() {
    new Date(WeakSet, Date, 882, ...v24, ...v21);
    return WeakSet;
}
f25();
f25();
%OptimizeFunctionOnNextCall(f25);
f25();
