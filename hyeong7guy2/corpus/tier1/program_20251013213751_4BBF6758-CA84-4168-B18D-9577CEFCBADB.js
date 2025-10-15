const v0 = class {
}
const v1 = v0.__lookupGetter__;
try { new v1(v1, v1); } catch (e) {}
const v5 = {
    next() {
        return { ...this };
    },
};
