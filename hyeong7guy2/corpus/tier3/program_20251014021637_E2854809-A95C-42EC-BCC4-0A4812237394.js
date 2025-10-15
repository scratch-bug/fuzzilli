[];
const v3 = Symbol.iterator;
Symbol.for(v3.description);
const v15 = {
    [v3]() {
        let v8 = 10;
        const v14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                return { done: v12, value: v8 };
            },
        };
        return v14;
    },
};
v15.d = v15;
class C16 {
    [v15](a18) {
        let v19 = 0;
        while (v19 < 7) {
            v19++;
        }
        return a18;
    }
}
new C16();
new C16();
new C16();
new C16();
const v29 = new Uint32Array(255);
v29[134];
try { Uint8ClampedArray.bind(Uint8ClampedArray); } catch (e) {}
Date();
Int16Array.d = Int16Array;
undefined ?? undefined;
Date();
const v42 = ([-60031]).constructor;
const v43 = v42?.apply;
try { new v43(v42, -10); } catch (e) {}
for (let i49 = 0; i49;) {
}
function F52(a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    const v56 = this?.constructor;
    try { new v56(a54, a54); } catch (e) {}
    a54 ?? a54;
    a55 ?? a55;
    this.g = Uint8ClampedArray;
}
const v60 = new F52();
v60.h = v60;
gc.prototype = gc;
gc();
class C63 {
}
const v64 = {};
4294967297 + 4294967297;
