class C3 extends Float32Array {
}
const v4 = new C3();
const v7 = Symbol.iterator;
const v18 = {
    [v7]() {
        v4[6] >>>= 10;
        const v17 = {
            next() {
                const v12 = {
                    next() {
                        return this;
                    },
                    done: 10,
                };
                const v16 = {
                    construct(a14, a15) {
                    },
                };
                return v12;
            },
        };
        return v17;
    },
};
let v19 = 882;
const v21 = new Int16Array(C3, 4, 4);
function f22() {
    new Date(WeakSet, Date, v19, ...v21, ...v18);
    4 < 20000;
    ++v19;
    const v27 = {};
    for (let i29 = 0;
        (() => {
            for (let v30 = 0; v30 < 10; v30++) {
            }
            return i29 < 100000;
        })();
        i29++) {
        v27.a = i29;
    }
    return v19;
}
f22();
%PrepareFunctionForOptimization(f22);
%OptimizeFunctionOnNextCall(f22);
f22();
