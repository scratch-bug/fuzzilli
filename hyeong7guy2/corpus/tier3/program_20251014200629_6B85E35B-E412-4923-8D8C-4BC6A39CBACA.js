function f1(a2, a3) {
    return "undefined";
}
const v7 = new Worker(f1, { type: "function" });
v7.postMessage("undefined");
