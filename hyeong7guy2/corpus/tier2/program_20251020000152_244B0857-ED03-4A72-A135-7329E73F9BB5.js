function f0(a1, a2, a3, a4) {
    return a3;
}
function f5() {
    return 21709n << 21709n;
}
f0.toString = f5;
const v8 = f0.toString(f0, f0, f0, f0, f5);
for (let v9 = 0; v9 < 5; v9++) {
    const v11 = Object(v8);
    function f12() {
        return v8;
    }
    function f13(a14) {
        return a14;
    }
    Object.defineProperty(v11, "valueOf", { configurable: true, enumerable: true, get: f12, set: f13 });
}
