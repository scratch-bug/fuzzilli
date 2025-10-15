function f0(a1) {
    return f0;
}
class C2 extends f0 {
}
const v5 = class {
}
function f6() {
    for (let i7 = 3; i7 < 25000; i7++) {
        try {
            new C2();
        } catch(e14) {
            for (let i16 = 0;
                (() => {
                    const v18 = i16 < 20000;
                    !v18;
                    return v18;
                })();
                ) {
            }
        }
    }
    return C2;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
