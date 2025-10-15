function f0(a1) {
}
class C2 extends f0 {
}
const v3 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
const v6 = class {
}
function f7() {
    for (let i8 = 3; i8 < 25000; i8++) {
        try {
            new C2();
        } catch(e15) {
        }
        v3["pop"]();
    }
}
Object.defineProperty(v6, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f7 });
try { new Int32Array(v6); } catch (e) {}
