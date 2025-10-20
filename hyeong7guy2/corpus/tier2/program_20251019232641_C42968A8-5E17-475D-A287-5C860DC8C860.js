function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = Symbol.iterator;
    const v27 = {
        [v9]() {
            for (let i14 = 10 >> 10, i15 = 10; i14 < i15; i14++, i14++, ++i15) {
            }
            const v26 = {
                next() {
                    return { done: 10 };
                },
            };
            return v26;
        },
    };
    const v30 = new Int16Array();
    function f31() {
        new Date(WeakSet, Date, 882, ...v30, ...v27);
        return a5;
    }
    f31();
    f31();
    %OptimizeFunctionOnNextCall(f31);
    f31();
}
new F0(F0, F0, F0, F0);
