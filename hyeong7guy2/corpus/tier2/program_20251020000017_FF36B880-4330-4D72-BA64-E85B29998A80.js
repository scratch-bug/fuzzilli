const v3 = Symbol.iterator;
const v20 = {
    [v3]() {
        for (let i9 = 10 / (10 >> 10), i10 = 10; i10++, i9 < i10;) {
        }
        const v19 = {
            next() {
                return { done: 10 };
            },
        };
        return v19;
    },
};
const v23 = new Int16Array(882);
function f24() {
    let v25;
    try { v25 = new Date(WeakSet, Date, 882, ...v23, ...v20); } catch (e) {}
    return v25;
}
f24();
f24();
%OptimizeFunctionOnNextCall(f24);
f24();
