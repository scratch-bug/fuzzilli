const v0 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
const v3 = class {
}
function f4() {
    const v5 = [f4,f4,f4];
    for (let i6 = 3; i6 < 25000; i6++) {
        v0[3] = v5[4] | 7;
        v0["pop"]();
    }
    return v5;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
