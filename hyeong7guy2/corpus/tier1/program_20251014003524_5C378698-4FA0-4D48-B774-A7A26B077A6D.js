const v0 = [5,31639,11439];
const v2 = Symbol.iterator;
const v11 = {
    [v2]() {
        let v4 = 10;
        const v10 = {
            next() {
                v4--;
                const v8 = v4 == 0;
                return { done: v8, value: v4 };
            },
        };
        return v10;
    },
};
5n << 5n;
class C14 {
    static valueOf(a16) {
        const t18 = {};
        t18.h = v0;
        const v18 = {};
        v18.h = v0;
        v18.d = this;
        const v19 = {};
        v19.h = v0;
        v19.d = this;
        v19.b = a16;
        const v20 = {};
        v20.h = v0;
        v20.d = this;
        v20.c = v0;
    }
}
C14.prototype = C14;
const v21 = new C14();
const v22 = new C14();
const v23 = v22?.constructor;
try { new v23(); } catch (e) {}
const v25 = new C14();
const v28 = `
    v2[6] = v21;
`;
eval(v28);
new Uint32Array(1751);
function f32() {
    return v25;
}
f32.caller = f32;
new Int16Array(171);
const v44 = {
    n(a38, a39, a40, a41) {
        const v42 = {};
        v42.d ^= 1;
        return v42;
    },
};
const v47 = Date.prototype.setMonth;
try { v47.apply(); } catch (e) {}
