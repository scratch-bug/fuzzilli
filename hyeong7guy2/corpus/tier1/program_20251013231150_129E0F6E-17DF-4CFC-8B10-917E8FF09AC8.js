function f1() {
    return Float64Array;
}
Object.defineProperty(Float64Array, 1, { configurable: true, get: f1 });
