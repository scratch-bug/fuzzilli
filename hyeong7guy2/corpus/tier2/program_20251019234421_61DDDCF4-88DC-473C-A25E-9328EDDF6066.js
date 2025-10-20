const v1 = class {
}
function f2() {
    function f4() {
        return f4;
    }
    const v5 = [1073741823,4,4,-11,-9007199254740991];
    const v6 = { getOwnPropertyDescriptor: f4 };
    const v7 = v6.getOwnPropertyDescriptor(v1);
    const v9 = new Proxy(v5, v6);
    v9[4];
    let v11;
    try { v11 = v9.fill(); } catch (e) {}
    v11 ?? v11;
    const v14 = Symbol.dispose;
    const v17 = {
        [v14]() {
            f2();
        },
    };
    using v18 = v17;
    for (let i19 = Float32Array; i19 < 25000;) {
    }
    return v7;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
