function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = class {
    static {
        delete this.f;
    }
    [F0] = F0;
    static [F0](a6, a7) {
    }
}
