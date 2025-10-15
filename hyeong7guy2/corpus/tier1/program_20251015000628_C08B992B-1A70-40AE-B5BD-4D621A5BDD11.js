class C1 {
}
const v3 = {};
const v7 = {
    getOwnPropertyDescriptor(a5, a6) {
        this.set = Array;
        return this;
    },
};
v7.configurable = C1;
const v8 = new Proxy(v3, v7);
v8.__lookupGetter__(v3, Array, Array);
