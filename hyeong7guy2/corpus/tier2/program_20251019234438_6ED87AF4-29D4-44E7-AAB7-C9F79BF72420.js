const v2 = Symbol.iterator;
class C4 extends Float32Array {
}
const v5 = new C4();
const v17 = {
    [v2]() {
        v5[6] >>>= 10;
        const v16 = {
            next() {
                const v11 = {
                    next() {
                        return C4;
                    },
                    done: 10,
                };
                const v15 = {
                    construct(a13, a14) {
                        return v5;
                    },
                };
                return v11;
            },
        };
        return v16;
    },
};
let v18 = 882;
const v20 = new Int16Array();
function f21() {
    new Date(WeakSet, Date, v18, ...v20, ...v17);
    v18 < 20000;
    ++v18;
    const v26 = {};
    for (let i28 = 0;
        (() => {
            for (let v29 = 0; v29 < 10; v29++) {
            }
            return i28 < 100000;
        })();
        i28++) {
        v26.a = i28;
    }
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
