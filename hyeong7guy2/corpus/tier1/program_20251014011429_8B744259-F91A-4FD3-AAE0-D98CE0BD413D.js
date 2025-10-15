const v2 = class {
}
function f3() {
    const v4 = [];
    v4[2] = 2.2;
    for (let i6 = 3; i6 < 25000; i6++) {
        v4[4] | 7;
    }
    return v4;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
