function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 {
}
const v5 = class extends C4 {
    static #d;
    get d() {
        C4.#d = this;
    }
}
const v7 = F0.__lookupSetter__;
try { new v7(); } catch (e) {}
