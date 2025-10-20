const v4 = Symbol.iterator;
const v21 = {
    [v4]() {
        const v20 = {
            next() {
                class C9 extends Uint8Array {
                }
                const v10 = new C9();
                const t3 = Temporal.Instant;
                const v13 = new t3(v10);
                function f14() {
                    ("🙌🏿").link(v13);
                    return v10;
                }
                ({ construct: f14 }).construct();
                return { done: 10 };
            },
        };
        return v20;
    },
};
const v23 = new Int16Array();
function f24() {
    const v25 = new Date(WeakSet, Date, 882, ...v23, ...v21);
    return v25;
}
f24();
%PrepareFunctionForOptimization(f24);
%OptimizeFunctionOnNextCall(f24);
f24();
