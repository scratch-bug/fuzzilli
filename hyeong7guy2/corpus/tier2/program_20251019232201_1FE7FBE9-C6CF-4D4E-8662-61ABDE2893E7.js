class C2 extends Int32Array {
}
const v3 = new C2();
const v6 = Symbol.iterator;
const v13 = {
    [v6]() {
        let v8 = 10;
        v8++;
        v3[6] >>>= v8;
        const v12 = {
            next() {
                return { done: v8 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    new Date(WeakSet, Date, 882, ...v16, ...v13);
    return C2;
}
f17();
f17();
%OptimizeFunctionOnNextCall(f17);
f17();
