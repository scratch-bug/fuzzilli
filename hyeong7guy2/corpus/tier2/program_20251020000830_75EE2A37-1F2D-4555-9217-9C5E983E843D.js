function f0() {
}
const v2 = class extends f0 {
}
const v3 = new v2();
function f4() {
    return v3;
}
const v8 = Symbol.iterator;
const v25 = {
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
        try { v18(v18); } catch (e) {}
        const v21 = new Map();
        const v22 = v21.values();
        try { v22.equals(f4); } catch (e) {}
        v22.next();
        return v18;
    },
};
function f27() {
    new Date(WeakSet, Date, 882, ...v25, ...v25);
    const t35 = "7";
    t35[Symbol] = Symbol;
    for (let [v29,v30] of "7") {
    }
    return "7";
}
f27();
f27.call(v25, v2, v3);
%OptimizeFunctionOnNextCall(f27);
f27();
