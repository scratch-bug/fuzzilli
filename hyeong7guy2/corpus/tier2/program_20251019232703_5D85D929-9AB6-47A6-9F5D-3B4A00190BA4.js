class C0 {
}
new C0();
const v6 = Symbol.iterator;
const v19 = {
    [v6]() {
        const v10 = Object();
        const v11 = Object.setPrototypeOf(Object, v10);
        v10.defineProperty;
        try { v11(); } catch (e) {}
        const v17 = {
            next() {
                try { this.next(); } catch (e) {}
                return { done: 10 };
            },
        };
        v17.next();
        return v17;
    },
};
function f21() {
    const v22 = new Date(WeakSet, Date, 882, ...v19, ...v19);
    return v22;
}
f21.call().getYear();
%OptimizeFunctionOnNextCall(f21);
