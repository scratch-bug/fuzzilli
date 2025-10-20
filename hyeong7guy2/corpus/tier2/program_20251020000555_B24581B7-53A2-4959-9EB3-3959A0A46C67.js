function f0() {
}
const v2 = class extends f0 {
}
const v3 = new v2();
function f4() {
    return f0;
}
const v8 = Symbol.iterator;
const v26 = {
    [v8]() {
        const v18 = {
            next() {
                for (const v12 of "7") {
                    const v13 = v8;
                }
                function f14(a15) {
                    return this;
                }
                class C16 extends f14 {
                }
                v3.h %= 10;
                return { done: 10 };
            },
        };
        const v19 = v18.__lookupGetter__;
        try { v19(Symbol); } catch (e) {}
        const v22 = new Map();
        const v23 = v22.values();
        try { v23.reduce(f4); } catch (e) {}
        v23.next();
        return v18;
    },
};
function f28() {
    new Date(WeakSet, Date, 882, ...v26, ...v26);
    return f0;
}
f28();
f28.call();
%OptimizeFunctionOnNextCall(f28);
f28();
