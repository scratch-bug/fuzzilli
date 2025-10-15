function f0() {
}
const v1 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
v1[3] = f0;
const v4 = class {
}
function f5() {
    for (let i6 = 3; i6 < 25000; i6++) {
        f5[4];
        v1["pop"]();
    }
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
