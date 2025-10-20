class C0 {
}
const v2 = {};
const v6 = {
    getOwnPropertyDescriptor(a4, a5) {
        return this;
    },
};
v6.configurable = C0;
const v7 = new Proxy(v2, v6);
v7.__lookupSetter__(v2, C0, v6);
