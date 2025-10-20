let v1;
try { v1 = Int16Array(Int16Array, Int16Array, Int16Array); } catch (e) {}
const v2 = [4294967295,-9];
class C3 {
}
const v6 = class {
}
function f7() {
    const v8 = [3,v2];
    v8[2147483647];
    Symbol.apply(C3, v1);
    const v12 = Symbol.dispose;
    const v15 = {
        [v12]() {
            f7();
        },
    };
    using v16 = v15;
    for (let v17 = 0; v17 < 5; v17++) {
        v8[4] | 7;
    }
    return C3;
}
Object.defineProperty(v6, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f7 });
try { new Int32Array(v6); } catch (e) {}
