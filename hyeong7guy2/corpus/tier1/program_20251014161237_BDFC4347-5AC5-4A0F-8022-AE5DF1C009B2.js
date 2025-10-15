const v1 = class {
}
function f2() {
    %OptimizeMaglevOnNextCall(f2);
    for (let v3 = 0; v3 < 100; v3++) {
    }
    return v1;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
