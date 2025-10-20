class C1 {
}
const v3 = {};
const v7 = {
    getOwnPropertyDescriptor(a5, a6) {
        this.set = this;
        return this;
    },
};
v7.configurable = v7;
const v8 = new Proxy(v3, v7);
try { v8.__lookupGetter__(v3, Array, Array); } catch (e) {}
