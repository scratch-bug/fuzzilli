function f1() {
    return Float32Array;
}
function f2(a3) {
    return a3;
}
Object.defineProperty(Float32Array, 2, { configurable: true, enumerable: true, get: f1, set: f2 });
const v5 = class {
}
function f6() {
    const v7 = {};
    const v9 = Symbol.dispose;
    const v12 = {
        [v9]() {
            f6();
        },
    };
    using v13 = v12;
    for (let i14 = Float32Array; i14.apply(v7, i14), 25000;) {
    }
    return Int32Array;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
