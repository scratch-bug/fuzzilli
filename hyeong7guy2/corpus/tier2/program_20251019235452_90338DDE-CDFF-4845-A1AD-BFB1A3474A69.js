const v1 = class extends Int8Array {
}
const v4 = [Set];
let v5 = 1073741825;
const v8 = new WeakSet(v4);
const v9 = Symbol.iterator;
const v19 = {
    [v9]() {
        let v11 = 39000;
        [v11,...v5] = v4;
        const v14 = {
            next() {
                return { done: v11 };
            },
        };
        const v17 = Math.min(-830387.4765292236, v5);
        switch (v1) {
            case v8:
                break;
        }
        v17 - v17;
        return v14;
    },
};
function f21() {
    let v22;
    try { v22 = new Date(WeakSet, Date, 882, ...v19, ...v19); } catch (e) {}
    return v22;
}
f21();
f21.call();
%OptimizeFunctionOnNextCall(f21);
f21();
