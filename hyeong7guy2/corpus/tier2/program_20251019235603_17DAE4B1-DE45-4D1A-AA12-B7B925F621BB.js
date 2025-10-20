const v1 = new Int8Array();
for (let i4 = 0, i5 = 10; i5; i5--) {
}
function f11(a12, a13, a14) {
    return v1;
}
const v20 = {
    get b() {
        gc();
        return v1;
    },
    type: "function",
};
Object.defineProperty(v20, "flushDenormals", { configurable: true, enumerable: true, value: v1 });
const v21 = new Worker(f11, v20);
v21.postMessage(v20);
