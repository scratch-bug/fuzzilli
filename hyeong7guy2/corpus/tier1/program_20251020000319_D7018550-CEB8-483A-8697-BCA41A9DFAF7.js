function f0() {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v3 = 0; v3 < 5; v3++) {
            const v5 = { a: 1 };
        }
        const v7 = { a: 1.1 };
    }
    const v8 = new F1();
    const v9 = v8.constructor;
    new v9(v9, F1, v9, f0, v8);
    for (let v12 = 0; v12 < 5; v12++) {
        const v15 = v12 ? { a: 1 } : Object;
        v15.toISOString = v15;
    }
    return f0;
}
const v16 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
v16();
