const v0 = class {
    set h(a2) {
        let [v4,v5] = [-9007199254740992,1024,9007199254740990,-11,166752765];
    }
}
class C6 extends v0 {
}
const v7 = new C6();
const v12 = Symbol.iterator;
const v18 = {
    [v12]() {
        this.h = this;
        const v17 = {
            next() {
                return { done: 10000 };
            },
        };
        return v17;
    },
    __proto__: v7,
};
const v20 = new Int16Array();
function f21() {
    const v22 = new Date(WeakSet, Date, -128, ...v20, ...v18);
    return v22;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
