function f3(a4) {
    const v7 = Symbol.iterator;
    const v16 = {
        [v7]() {
            const v15 = {
                next() {
                    const v11 = { done: 10 };
                    const v13 = Math.acosh(127);
                    v13 >>> v13;
                    return v11;
                },
            };
            return v15;
        },
    };
    const v19 = new Int16Array();
    function f20() {
        new Date(WeakSet, Date, 882, ...v19, ...v16);
        return 882;
    }
    f20();
    %PrepareFunctionForOptimization(f20);
    %OptimizeFunctionOnNextCall(f20);
    return f20();
}
function F24(a26) {
    if (!new.target) { throw 'must be called with new'; }
}
const v27 = Symbol.toPrimitive;
F24[v27] = f3;
const v31 = {
    o(a29, a30) {
        super[F24] = 12234;
        return v27;
    },
};
v31.o(v31, 127);
