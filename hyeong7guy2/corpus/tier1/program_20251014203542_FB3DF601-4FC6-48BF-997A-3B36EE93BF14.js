function f1() {
    return f1;
}
const v2 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
v2[3] = f1;
v2[89] = 268435456;
const v5 = class {
}
function f6() {
    for (let i7 = 1; i7 < 25000; i7++) {
        v2["pop"]();
    }
    return 1;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
