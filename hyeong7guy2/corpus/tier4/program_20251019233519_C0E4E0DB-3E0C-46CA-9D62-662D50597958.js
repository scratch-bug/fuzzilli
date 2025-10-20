const v0 = [];
for (let i3 = 0, i4 = 10; i4; i4--) {
}
function f10(a11, a12, a13) {
    return a12;
}
const v16 = { type: "function" };
v16.arguments = v0;
const v17 = new Worker(f10, v16);
v17.postMessage(v16);
