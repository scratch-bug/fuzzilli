function f0(a1, a2, a3, a4) {
    return f0;
}
function f5() {
    return -817162816n << -817162816n;
}
f0.toString = f5;
f0++;
for (let v9 = 0; v9 < 5; v9++) {
    const v11 = Object(f0);
    function f12() {
        return v11;
    }
    function f13(a14) {
        return f12;
    }
    Object.defineProperty(v11, "g", { configurable: true, enumerable: true, get: f12, set: f13 });
}
