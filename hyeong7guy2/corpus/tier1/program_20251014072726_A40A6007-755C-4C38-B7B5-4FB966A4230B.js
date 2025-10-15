const v1 = Array();
function f2() {
    return Array;
}
Object.defineProperty(v1, 43, { configurable: true, get: f2 });
function f3(a4, a5, a6) {
    return a4;
}
const v9 = [v1];
new Worker(f3, { arguments: v9, type: "function" });
