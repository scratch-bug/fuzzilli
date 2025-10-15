const v1 = new Uint32Array();
const v2 = class extends Uint32Array {
}
function f3(a4, a5) {
    return a5;
}
const v8 = [v2,v1];
new Worker(f3, { arguments: v8, type: "function" });
