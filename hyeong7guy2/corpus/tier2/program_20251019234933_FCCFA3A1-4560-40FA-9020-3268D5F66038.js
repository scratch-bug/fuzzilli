const v4 = Symbol.iterator;
const v14 = {
    [v4]() {
        const v13 = {
            next() {
                const v7 = { done: Uint16Array };
                for (let v8 = 0; v8 < 5; v8++) {
                    v8++;
                    function f10(a11, a12) {
                        return this;
                    }
                    v4[3811] -= v8;
                }
                return v7;
            },
        };
        return v13;
    },
};
const v17 = new Int16Array(Symbol);
function f18() {
    new Date(WeakSet, Date, 882, ...v17, ...v14);
    return v17;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
