const v2 = class {
}
function f3() {
    const v4 = [];
    const v7 = new Float32Array(255);
    v7[155] = v7;
    const v9 = Symbol.dispose;
    const v12 = {
        [v9]() {
            f3();
        },
    };
    using v13 = v12;
    for (let v14 = 0; v14 < 1000; v14++) {
        v14 < 25000;
        v4[4];
        v14++;
    }
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
