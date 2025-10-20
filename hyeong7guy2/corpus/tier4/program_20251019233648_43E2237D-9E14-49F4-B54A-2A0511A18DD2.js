class C0 {
}
function f1(a2, a3, a4) {
    return a4;
}
const v8 = new Worker(f1, { type: "function" });
const v9 = [9];
try {
    v8.postMessage(C0, v9);
} catch(e11) {
}
