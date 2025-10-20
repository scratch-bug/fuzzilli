let v3;
try { v3 = new WeakSet(); } catch (e) {}
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        const v8 = Object.is(Uint16Array, v3);
        Object(Object(), Uint16Array, v5, WeakSet, Uint16Array, v8);
        const v13 = {
            next() {
                return { done: Object };
            },
        };
        return v13;
    },
};
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v14, ...v14);
    return v17;
}
f16.call();
f16();
%OptimizeFunctionOnNextCall(f16);
f16();
