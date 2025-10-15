function f0(a1) {
    return a1;
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
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
        }
        let v21 = 1073741824;
        v21--;
        for (let v23 = 0; v23 < 250; v23++) {
            let v24 = 9007199254740990;
            v24 ^ ++v24;
        }
        v3["pop"]();
    }
    return C2;
}
Object.defineProperty(v6, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f7 });
try { new Int32Array(v6); } catch (e) {}
