function f0(a1) {
    return f0;
}
function f2(a3) {
    Object.seal(Array());
}
f0.toString = f2;
for (let v8 = 0; v8 < 5; v8++) {
    const t8 = f0.constructor;
    t8(f0);
}
