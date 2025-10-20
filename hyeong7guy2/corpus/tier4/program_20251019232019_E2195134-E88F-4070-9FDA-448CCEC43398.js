function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
v3.length = v3;
v3.h = v3;
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a6[45] = a6;
    a6.b = a6;
    this.a = a6;
}
const v9 = new F4(v3);
function f10(a11, a12, a13) {
    return v9;
}
const v16 = { type: "function" };
v16.flushDenormals = v9;
const v17 = new Worker(f10, v16);
v17.postMessage(v16);
