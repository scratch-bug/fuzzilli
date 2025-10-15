const v0 = class {
}
const v1 = class extends v0 {
    10000;
}
const v2 = new v1();
function f3(a4) {
    return a4;
}
const v7 = [v2];
new Worker(f3, { arguments: v7, type: "function" });
