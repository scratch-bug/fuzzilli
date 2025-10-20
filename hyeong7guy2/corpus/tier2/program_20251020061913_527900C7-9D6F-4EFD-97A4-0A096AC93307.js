const v1 = class {
}
function f2() {
    const v4 = parseInt();
    const v9 = new ArrayBuffer(3526, { maxByteLength: 3526 });
    const v11 = new Float64Array(v9);
    const v13 = [v4];
    Reflect.apply(v11.includes, v11, v13);
    return v11;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
