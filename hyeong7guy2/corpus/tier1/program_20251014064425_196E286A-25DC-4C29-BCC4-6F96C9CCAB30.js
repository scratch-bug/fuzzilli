const v1 = new Date();
const v2 = [v1];
const v3 = class {
}
const v4 = new v3();
v4.toJSON = v2;
function f5(a6, a7) {
    return v1;
}
const v10 = [v4];
new Worker(f5, { arguments: v10, type: "function" });
