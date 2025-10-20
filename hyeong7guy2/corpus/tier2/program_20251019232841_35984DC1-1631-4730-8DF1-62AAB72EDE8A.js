const v2 = class {
}
function f3() {
    const v5 = Symbol.dispose;
    const v8 = {
        [v5]() {
            f3();
        },
    };
    using v9 = v8;
    for (let v10 = 0; v10 < 5; v10++) {
        (8)[4] << 7;
    }
    return v9;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
