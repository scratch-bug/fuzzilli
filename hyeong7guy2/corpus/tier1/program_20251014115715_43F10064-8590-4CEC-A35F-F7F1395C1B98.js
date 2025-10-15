function f0() {
    return f0;
}
Object.defineProperty(this, 8, { enumerable: true, get: f0 });
