class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
const v3 = new C1();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        for (let i17 = (() => {
                Object.defineProperty(v2, v3, { configurable: true, enumerable: true, get: f8 });
                async function* f13(a14, a15) {
                    Object.defineProperty(a15, "d", { configurable: true, get: f13 });
                    return a7;
                }
                f13(this, v3);
                return -4096;
            })();
            i17 < 1;
            i17++) {
        }
        return this;
    }
    f8();
    %OptimizeFunctionOnNextCall(f8);
}
const v24 = new F4();
new F4(F4, v24);
new F4();
