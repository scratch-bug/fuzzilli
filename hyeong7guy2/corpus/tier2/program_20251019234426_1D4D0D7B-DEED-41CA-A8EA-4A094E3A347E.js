function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v17 = new Float32Array();
            const v20 = Symbol.iterator;
            const v26 = {
                [v20]() {
                    v17.length **= 10;
                    const v25 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v25;
                },
            };
            const v28 = new Int16Array();
            new Date(WeakSet, Date, 9, ...v28, ...v26);
        }
        new F9(9, a6, a4, a7);
        return a8;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
