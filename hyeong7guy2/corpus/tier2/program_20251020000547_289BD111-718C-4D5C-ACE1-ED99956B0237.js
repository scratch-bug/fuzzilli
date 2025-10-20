for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9(a10, a11, a12) {
    return a10;
}
const v15 = { type: "function" };
function f16() {
    return f9;
}
Object.defineProperty(v15, "flushDenormals", { configurable: true, get: f16 });
const v17 = new Worker(f9, v15);
v17.postMessage(v15);
