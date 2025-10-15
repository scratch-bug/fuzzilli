const v2 = class {
}
function f3() {
    const v4 = [3];
    v4.length = 3;
    v4[2] = 2.2;
    return 3;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
