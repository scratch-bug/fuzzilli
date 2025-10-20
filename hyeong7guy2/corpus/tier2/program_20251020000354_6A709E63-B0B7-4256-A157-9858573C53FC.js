function f2() {
    return f2;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(Float32Array, 2, { configurable: true, enumerable: true, get: f2, set: f3 });
const v5 = class {
}
function f6() {
    const v8 = Symbol.dispose;
    const v11 = {
        [v8]() {
            f6();
        },
    };
    using v12 = v11;
    for (let i13 = Float32Array;
        (() => {
            new i13(i13);
            i13.apply();
            return 25000;
        })();
        ) {
    }
    return v11;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
