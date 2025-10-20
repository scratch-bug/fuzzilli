const v0 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
const v3 = class {
}
function f5() {
    for (let i6 = 3;
        i6 < 25000;
        (() => {
            i6++;
            function f11(a12) {
                return i6;
            }
            v0.toString = f11;
        })()) {
        v0["pop"]();
    }
    return v0;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v3); } catch (e) {}
