const v1 = [Symbol,Symbol,Symbol,Symbol,Symbol];
const v4 = class {
}
function f5() {
    for (let i6 = 1; ++i6, i6 < 25000; i6 <= i6) {
        v1[i6] = Symbol;
    }
    return 1;
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
