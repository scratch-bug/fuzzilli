function f0() {
    return f0;
}
const v2 = class extends f0 {
}
function f3(a4, a5, a6) {
    this[Symbol.toPrimitive] = this;
    for (let v10 = 0; v10 < 5; v10++) {
        Object.defineProperty(a5, this, { set: v10 });
    }
    return f3;
}
try { f3("o7e", v2); } catch (e) {}
