const v4 = Symbol.iterator;
const v21 = {
    [v4]() {
        const v20 = {
            next() {
                const v8 = { done: 10 };
                for (let i10 = 0; i10 < 65537; ++i10) {
                    let constructor = i10;
                    for (let v17 = 0; v17 < 5; v17++) {
                        constructor = constructor / 4294967295;
                    }
                }
                return v8;
            },
        };
        return v20;
    },
};
const v24 = new Int16Array();
function f25() {
    new Date(WeakSet, Date, 882, ...v24, ...v21);
}
%OptimizeFunctionOnNextCall(f25);
f25();
