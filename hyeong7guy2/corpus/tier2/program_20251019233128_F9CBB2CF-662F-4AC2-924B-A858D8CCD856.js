function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = Symbol.iterator;
    const v20 = {
        [v12]() {
            BigUint64Array[Symbol.matchAll] = 10;
            const v19 = {
                next() {
                    "12" <= true;
                    return { done: 10 };
                },
            };
            return v19;
        },
    };
    const v23 = new Int16Array();
    function f24() {
        new Date(WeakSet, Date, 882, ...v23, ...v20);
        return a7;
    }
    f24();
    f24();
    %OptimizeFunctionOnNextCall(f24);
    f24();
}
new F3(true, BigUint64Array, BigUint64Array, BigUint64Array);
