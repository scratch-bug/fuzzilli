class C1 extends Int32Array {
}
const v5 = Symbol.iterator;
const v13 = {
    [v5]() {
        for (let v8 = 0; v8 < 5; v8++) {
            try { C1(v8, v5, C1, ...Int32Array); } catch (e) {}
        }
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
function f15() {
    const v16 = new Date(WeakSet, Date, 882, ...v13, ...v13);
    return v16;
}
f15();
f15();
%OptimizeFunctionOnNextCall(f15);
f15();
