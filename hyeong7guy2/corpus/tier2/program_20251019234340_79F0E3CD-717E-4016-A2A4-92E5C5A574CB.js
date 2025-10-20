function f0(a1) {
    function f2(a3) {
        return a3;
    }
    %OptimizeMaglevOnNextCall(f2);
    return f0;
}
const v4 = f0.toString(f0, f0, f0, f0);
for (let v5 = 0; v5 < 5; v5++) {
    const v7 = Object(v4);
    function f8() {
        return f8;
    }
    function f9(a10) {
        return a10;
    }
    Object.defineProperty(v7, "valueOf", { configurable: true, enumerable: true, get: f8, set: f9 });
}
