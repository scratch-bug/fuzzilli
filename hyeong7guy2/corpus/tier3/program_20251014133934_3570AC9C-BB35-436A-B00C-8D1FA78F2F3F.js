function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = Symbol.iterator;
const v5 = class extends Date {
}
const v6 = new v5();
try { v6.setUTCHours(F0, v4); } catch (e) {}
