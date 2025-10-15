function f1() {
    return 0;
}
globalThis[Symbol.toPrimitive] = f1;
function f5() {
    return Symbol;
}
const v7 = class extends f5 {
}
function f8(a9, a10, a11) {
    for (let v13 = 0; v13 < 5; v13++) {
        Object.defineProperty(a10, this, { set: v13 });
    }
    return this;
}
try { f8("o7e", v7); } catch (e) {}
for (let i17 = 0, i18 = 10; i18; i18--) {
}
