function f0(a1, a2, a3, a4) {
    return a4;
}
const v5 = f0.toString();
for (let v6 = 0; v6 < 5; v6++) {
    const v8 = Object(v5);
    function f9() {
        return f0;
    }
    function f10(a11) {
        return f10;
    }
    Object.defineProperty(v8, "valueOf", { configurable: true, enumerable: true, get: f9, set: f10 });
}
