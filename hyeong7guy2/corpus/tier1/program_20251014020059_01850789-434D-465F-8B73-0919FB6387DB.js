function f1() {
    return globalThis;
}
Object.defineProperty(globalThis, "obj", { configurable: true, enumerable: true, get: f1 });
globalThis.obj;
