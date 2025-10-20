const v3 = Symbol.iterator;
const v24 = {
    [v3]() {
        let v5 = 10;
        for (let [i12, i13] = (() => {
                const v8 = v5 / (10 >> 10);
                new Uint8Array();
                function f11() {
                    return v8;
                }
                return [v8, 10];
            })();
            i12 < i13;
            ) {
        }
        const v23 = {
            next() {
                v5--;
                return Symbol;
            },
            next() {
                return { done: v5 };
            },
        };
        return v23;
    },
};
const v27 = new Int16Array();
function f28() {
    new Date(WeakSet, Date, 882, ...v27, ...v24);
    return v3;
}
f28();
f28();
%OptimizeFunctionOnNextCall(f28);
f28();
