const v0 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
const v2 = class {
}
function f3() {
    for (let v4 = 0; v4 < 100; v4++) {
        v0["pop"](f3);
    }
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
