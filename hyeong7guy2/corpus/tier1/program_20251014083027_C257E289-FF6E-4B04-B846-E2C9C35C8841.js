function f1(a2) {
}
class C3 extends f1 {
}
const v4 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
const v7 = class {
}
function f8() {
    const v9 = %WasmStruct();
    gc({});
    for (let i13 = 3; i13 < 25000; i13++) {
        try {
            new C3();
        } catch(e20) {
        }
        v4["pop"]();
    }
    const v23 = [];
    const v25 = class extends BigInt64Array {
    }
    const v26 = { g: v25 };
    const v28 = [v7,v7,v7];
    const v29 = v23.values;
    Reflect.apply(v29, v26, v28) !== v29;
    return v26;
}
Object.defineProperty(v7, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f8 });
try { new Int32Array(v7); } catch (e) {}
