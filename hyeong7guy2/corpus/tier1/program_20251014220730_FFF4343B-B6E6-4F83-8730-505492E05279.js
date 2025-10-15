const v0 = -Infinity;
for (let v1 = 0; v1 < 5; v1++) {
    const v3 = Object(v0);
    function f4() {
        return v1;
    }
    function f5(a6) {
        return a6;
    }
    Object.defineProperty(v3, "valueOf", { configurable: true, enumerable: true, get: f4, set: f5 });
}
