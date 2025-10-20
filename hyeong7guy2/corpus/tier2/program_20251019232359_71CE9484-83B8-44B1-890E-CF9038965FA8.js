const v2 = class {
}
function f3() {
    const v4 = [3];
    v4.length = 3;
    v4[2147483647];
    const v8 = Symbol.dispose;
    const v11 = {
        [v8]() {
            f3();
        },
    };
    using v12 = v11;
    v4[2] = 2.2;
    for (let i13 = 3; i13 < 25000; i13++) {
        const v21 = v4[4] | 7;
        v21 - v21;
    }
    return 3;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
