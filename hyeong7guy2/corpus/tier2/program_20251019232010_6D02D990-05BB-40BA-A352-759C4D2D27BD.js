const v1 = [Symbol];
const v2 = [];
const v5 = class {
}
function f6() {
    for (let i7 = 1; ++i7, i7 < 25000;) {
        v2[i7] = v1;
    }
    return f6;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
