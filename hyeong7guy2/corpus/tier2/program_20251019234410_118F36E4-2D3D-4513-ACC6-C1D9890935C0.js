const v3 = class extends Uint16Array {
}
const v6 = Symbol.iterator;
const v17 = {
    [v6]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v11 = new t1();
            try { v11.pass_pointer(128); } catch (e) {}
        }
        const v16 = {
            next() {
                return { done: 10000 };
            },
        };
        return v16;
    },
};
const v19 = new v3();
function f20() {
    new Date(WeakSet, Date, -128, ...v19, ...v17);
    return v19;
}
f20();
%PrepareFunctionForOptimization(f20);
%OptimizeFunctionOnNextCall(f20);
f20();
