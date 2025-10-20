const v1 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
Object.defineProperty(v1, 43, { configurable: true, value: Date });
v1[89] = 268435456;
const v4 = class {
}
function f5() {
    for (let v6 = 0; v6 < 100; v6++) {
        v1["pop"]();
    }
    return 268435456;
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
