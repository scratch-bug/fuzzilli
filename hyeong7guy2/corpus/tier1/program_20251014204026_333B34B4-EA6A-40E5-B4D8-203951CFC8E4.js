const v2 = class {
}
function f3() {
    for (let i4 = 3; i4 < 25000; i4++) {
        ("2147483647").charAt();
    }
    return f3;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
