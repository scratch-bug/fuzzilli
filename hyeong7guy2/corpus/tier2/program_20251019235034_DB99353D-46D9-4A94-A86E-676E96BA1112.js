const v6 = Symbol.iterator;
const v7 = Symbol.for();
const v21 = {
    [v6]() {
        Float32Array[6] >>>= 10;
        const v18 = {
            next() {
                const v11 = 10 !== 3546;
                v11 << v11;
                new Uint32Array(3546);
                const v17 = {
                    valueOf() {
                    },
                    [v7]() {
                    },
                    done: "NFD",
                };
                v17.h = v17;
                return v17;
            },
        };
        const v20 = Array();
        v20.e = v20;
        v20[0] = v20;
        return v18;
    },
};
function f23() {
    new Date(WeakSet, Date, 882, ...v21, ...v21);
}
f23();
%PrepareFunctionForOptimization(f23);
%OptimizeMaglevOnNextCall(f23);
f23();
