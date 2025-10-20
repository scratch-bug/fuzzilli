function f0(a1) {
    return a1;
}
class C2 extends f0 {
}
const v5 = class {
}
function f6() {
    for (let i7 = 3;
        (() => {
            const v9 = i7 < 25000;
            let {...v11} = Object;
            return v9;
        })();
        i7++) {
        try {
            new C2();
        } catch(e16) {
            for (let v17 = 0; v17 < 5; v17++) {
            }
        }
    }
    return 3;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
