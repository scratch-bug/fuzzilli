function f1() {
    return Symbol;
}
const v3 = class extends f1 {
}
function f4(a5, a6, a7) {
    function f9() {
        return f4;
    }
    this[Symbol.toPrimitive] = f9;
    for (let v11 = 0; v11 < 5; v11++) {
        Object.defineProperty(a6, this, { set: v11 });
    }
    return a6;
}
try { f4("o7e", v3); } catch (e) {}
