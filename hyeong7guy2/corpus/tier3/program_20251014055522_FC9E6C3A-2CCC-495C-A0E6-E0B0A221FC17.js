const v0 = [];
function f1(a2) {
    const v3 = a2.apply(a2, f1, f1, f1, f1);
    SharedArrayBuffer.slice(v0, v3, a2);
    return v3;
}
v0.then = f1;
async function f6() {
    await v0;
    return f6;
}
f6();
