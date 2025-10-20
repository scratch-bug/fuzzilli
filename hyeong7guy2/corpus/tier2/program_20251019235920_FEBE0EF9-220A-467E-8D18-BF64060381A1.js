function f1() {
    return f1;
}
const v2 = class extends f1 {
}
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        const v12 = {
            next() {
                v2.h %= 10;
                const v9 = { done: 10 };
                const v10 = v9.__defineGetter__;
                try { v10(v10, v10, v2, this); } catch (e) {}
                return v9;
            },
        };
        const v13 = v12.next();
        v13.done = v13;
        return v12;
    },
};
function f16() {
    new Date(WeakSet, Date, 882, ...v14, ...v14);
    return Date;
}
const v18 = f16();
f16.call(WeakSet, v18, Date, v18, v18);
%OptimizeFunctionOnNextCall(f16);
f16();
