const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        let v5;
        try { v5 = this(); } catch (e) {}
        let v6 = 0.0;
        v6 -= v5;
        eval(v5);
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17();
f17();
%OptimizeFunctionOnNextCall(f17);
f17();
