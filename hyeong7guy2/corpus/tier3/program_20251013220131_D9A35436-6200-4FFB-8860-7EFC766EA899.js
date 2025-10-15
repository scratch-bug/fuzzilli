("isSealed").localeCompare();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { v7(this); } catch (e) {}
}
F4.prototype = F4;
new F4(F4);
const v10 = class extends Int16Array {
}
const v11 = new v10();
v11.includes(Symbol);
