function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
}
const t5 = this.ReferenceError;
const v6 = t5(v3);
const v8 = Set.constructor;
try { v8(v6); } catch (e) {}
