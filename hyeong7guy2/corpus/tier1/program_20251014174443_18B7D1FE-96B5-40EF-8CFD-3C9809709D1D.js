function f0(a1, a2) {
    return a1;
}
const v4 = new Promise(f0);
const v8 = Symbol.iterator;
const v16 = {
    [v8]() {
        try {
            this.p(v4);
        } catch(e12) {
        }
        const v15 = {
            next() {
                return { done: 10 };
            },
        };
        return v15;
    },
};
const v19 = new Int16Array(Promise, 882, 882);
function f20() {
    new Date(WeakSet, Date, 882, ...v19, ...v16);
    return 882;
}
f20();
f20();
%OptimizeFunctionOnNextCall(f20);
f20();
