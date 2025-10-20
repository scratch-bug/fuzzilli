const v3 = Symbol.iterator;
const v16 = {
    [v3]() {
        const v8 = {
            next() {
                return { done: 10 };
            },
        };
        const v10 = new Map();
        const v11 = v10.values();
        function f12() {
            return f12;
        }
        function f13(a14) {
            return f13;
        }
        Object.defineProperty(v11, "return", { enumerable: true, get: f12, set: f13 });
        v11.next();
        return v8;
    },
};
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v16, ...v16);
    return v19;
}
f18();
f18.call(v3);
%OptimizeFunctionOnNextCall(f18);
f18();
