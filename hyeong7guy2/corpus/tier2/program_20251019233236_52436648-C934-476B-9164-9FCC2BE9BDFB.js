let v0 = 1676310533;
const v3 = Symbol.iterator;
const v19 = {
    [v3]() {
        v0--;
        const v18 = {
            next() {
                const v7 = {};
                for (let i9 = 0;
                    (() => {
                        const v11 = i9 < 20000;
                        const v12 = {};
                        return v11;
                    })();
                    ++i9) {
                    v7.p1 = v7;
                    const v16 = [11191,1073741825,-268435456,-8,-4294967296,56441,-1498110414,-9223372036854775807,293,0];
                    v16[6] = v16;
                }
                return { done: v0 };
            },
        };
        return v18;
    },
};
const v22 = new Int16Array();
function f23() {
    new Date(Symbol, Date, 882, ...v22, ...v19);
    return 882;
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeFunctionOnNextCall(f23);
f23();
