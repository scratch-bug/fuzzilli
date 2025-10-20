class C0 {
    #p(a2) {
    }
}
class C3 extends C0 {
    #toString(a5, a6, a7) {
    }
}
const v8 = new C3();
const v9 = new C3();
const v12 = new Float32Array();
const v15 = Symbol.iterator;
const v28 = {
    [v15]() {
        v12.length **= 10;
        const v20 = {
            next() {
                return { done: 10 };
            },
        };
        new C3();
        const v22 = %WasmArray();
        async function f23(a24, a25) {
            await v22;
        }
        try { f23(C0, v8); } catch (e) {}
        return v20;
    },
};
for (let v30 = 0; v30 < 25; v30++) {
    v9["p" + v30] = v30;
}
const v34 = new Int16Array(Date);
function f35() {
    new Date(WeakSet, Date, 882, ...v34, ...v28);
}
f35();
%PrepareFunctionForOptimization(f35);
%OptimizeFunctionOnNextCall(f35);
f35();
