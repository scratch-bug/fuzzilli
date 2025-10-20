function f2(a3) {
    const v6 = Symbol.iterator;
    const v15 = {
        [v6]() {
            const v14 = {
                next() {
                    const v10 = { done: 10 };
                    let v12;
                    try { v12 = Math.acos(v6); } catch (e) {}
                    v12 ?? v12;
                    return v10;
                },
            };
            return v14;
        },
    };
    const v18 = new Int16Array(v15, 882, 882);
    function f19() {
        new Date(WeakSet, Date, 882, ...v18, ...v15);
        return 12234;
    }
    f19();
    %PrepareFunctionForOptimization(f19);
    %OptimizeFunctionOnNextCall(f19);
    return f19();
}
function F23(a25) {
    if (!new.target) { throw 'must be called with new'; }
}
F23[Symbol.toPrimitive] = f2;
const v30 = {
    o(a28, a29) {
        super[F23] = 12234;
        return a29;
    },
};
v30.o();
