function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Float32Array {
    }
    const v7 = new C6();
    const v10 = new Date(a3);
    const v11 = Symbol.iterator;
    const v16 = {
        [v11]() {
            const v15 = {
                next() {
                    return { done: v10 };
                },
            };
            return v15;
        },
    };
    function f18() {
        const v19 = new Date(WeakSet, a2, 882, ...v7, ...v16);
        return v19;
    }
    %OptimizeFunctionOnNextCall(f18);
    f18();
}
const v21 = new F0();
const v22 = v21.constructor;
new v22(v21, F0, v21, v22);
