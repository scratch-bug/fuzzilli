[820.6639990574286];
gc();
new Int8Array(4294967295);
class C7 {
    static {
        this.name;
        Object.hasOwn(C7, this);
    }
}
new C7();
C7.constructor = gc;
const t11 = C7?.constructor;
t11();
Int16Array[2] = 4294967295;
new Int16Array(7);
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    const v25 = Symbol.dispose;
    const v27 = {
        value: Int16Array,
        [v25]() {
        },
    };
    using v28 = v27;
    const v29 = v28.value;
    v29[1] = 7;
    new v29(Int16Array, a23, v27);
}
new F18(-1000000000.0, C7, 7);
for (let i = 0; i < 5; i++) {
}
