function f0(a1) {
    a1[0];
    Array.prototype.concat.call(a1);
    return a1[0];
}
for (let i9 = 0; i9 < 20000; i9++) {
    const arr = [1.1];
    f0(arr);
}
const v19 = [];
function f21() {
    const v22 = {};
    v19[0] = v22;
    return v22;
}
Object.defineProperty(v19, "constructor", { get: f21 });
f0(v19);
