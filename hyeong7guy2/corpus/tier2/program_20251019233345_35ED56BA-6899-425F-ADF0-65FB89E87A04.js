class C3 extends Int32Array {
}
const v4 = new C3(129);
const v7 = Symbol.iterator;
const v14 = {
    [v7]() {
        for (let v9 = 0; v9 < 5; v9++) {
        }
        v4[6] >>>= 10;
        const v13 = {
            next() {
                return { done: 10 };
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v17, ...v14);
    return v19;
}
f18();
f18();
%OptimizeFunctionOnNextCall(f18);
f18();
