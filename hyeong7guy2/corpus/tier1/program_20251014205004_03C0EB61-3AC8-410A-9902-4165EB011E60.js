for (let v1 = 0; v1 < 5; v1++) {
    const v3 = Object(-1e-15);
    function f4() {
        return Object;
    }
    function f5(a6) {
        return f5;
    }
    Object.defineProperty(v3, "valueOf", { configurable: true, enumerable: true, get: f4, set: f5 });
}
