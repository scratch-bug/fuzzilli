function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Float32Array {
    }
    const v7 = new C6();
    const v10 = Symbol.iterator;
    const v16 = {
        [v10]() {
            v7[6] >>>= 10;
            const v15 = {
                next() {
                    return { done: 10 };
                },
            };
            return v15;
        },
    };
    function f18() {
        new Date(WeakSet, Date, 882, ...v7, ...v16);
        return a3;
    }
    f18();
    %OptimizeFunctionOnNextCall(f18);
    f18();
}
new F0();
new F0();
