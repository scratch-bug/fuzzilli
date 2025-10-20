function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Float32Array {
    }
    const v7 = new C6();
    const v10 = Symbol.iterator;
    const v16 = {
        [v10]() {
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
        return C6;
    }
    f18.call();
    %OptimizeFunctionOnNextCall(f18);
    f18();
}
const v22 = new F1(Symbol, F1);
const v23 = v22.constructor;
const v24 = new v23();
const t27 = v22.constructor;
const v26 = new t27();
const v27 = new F1(Symbol, v23);
const v28 = v27.constructor;
new v28(Symbol, v26, v28, v24, v27);
