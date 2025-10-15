const v2 = class {
}
function f3() {
    const v4 = Symbol.dispose;
    const v7 = {
        [v4]() {
            f3();
        },
    };
    using v8 = v7;
    return Reflect.apply();
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
