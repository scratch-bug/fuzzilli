const v1 = [gc];
Object.defineProperty(v1, "toJSON", { configurable: true, value: gc });
function f2(a3, a4, a5) {
    return a4;
}
const v8 = [v1];
new Worker(f2, { arguments: v8, type: "function" });
