const v1 = class {
}
function f2() {
    const v3 = [Int32Array];
    function f5() {
        return v1;
    }
    const v6 = [1073741823,4,4,-11,-9007199254740991];
    const v9 = new Proxy(v6, { getOwnPropertyDescriptor: f5 });
    try { v9.fill(); } catch (e) {}
    const v12 = Symbol.dispose;
    const v15 = {
        [v12]() {
            f2();
        },
    };
    using v16 = v15;
    for (let i17 = Float32Array; i17 < 25000;) {
        const v23 = v3 | 7;
        v23 - v23;
    }
    return Float32Array;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
