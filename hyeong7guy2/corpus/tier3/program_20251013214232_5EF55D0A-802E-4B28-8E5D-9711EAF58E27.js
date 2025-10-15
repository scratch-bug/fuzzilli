function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = {
    __proto__: F0,
    get c() {
        return this;
    },
};
v3.__defineGetter__;
