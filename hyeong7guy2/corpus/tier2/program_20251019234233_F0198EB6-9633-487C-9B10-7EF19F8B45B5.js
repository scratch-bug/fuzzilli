const v3 = [4294967295,-9];
class C4 {
}
new C4();
const v9 = class {
}
function f10() {
    const v11 = [3,v3,-1e-15];
    v11.length = 3;
    v11[2147483647];
    const v15 = Symbol.dispose;
    const v18 = {
        [v15]() {
            f10();
        },
    };
    using v19 = v18;
    for (let v20 = 0; v20 < 1000; v20++) {
        v20 < 25000;
        v11[4] | 7;
    }
    return 3;
}
Object.defineProperty(v9, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f10 });
try { new Int32Array(v9); } catch (e) {}
