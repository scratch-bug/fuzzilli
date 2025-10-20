const v2 = class extends Int16Array {
}
const v4 = new Date(2, v2);
const v5 = class {
}
const v6 = new v5();
v6.toJSON = v4;
function f7(a8, a9) {
    return a9;
}
const v12 = [v6];
new Worker(f7, { arguments: v12, type: "function" });
