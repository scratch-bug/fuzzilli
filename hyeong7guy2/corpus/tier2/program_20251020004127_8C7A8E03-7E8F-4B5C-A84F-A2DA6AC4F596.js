const v3 = Symbol.iterator;
const v19 = {
    [v3]() {
        const v18 = {
            next() {
                let v7 = 7;
                for (let v8 = 0; v8 < 5; v8++) {
                    v8++;
                    super.c &= v7;
                    for (let i11 = 0; i11 < 1; i11++) {
                        v7 %= i11;
                    }
                }
                return { done: 10 };
            },
        };
        return v18;
    },
};
const v22 = new Int16Array(Date, 882);
function f23() {
    const v24 = new Date(WeakSet, Date, 882, ...v22, ...v19);
    return v24;
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeFunctionOnNextCall(f23);
f23();
