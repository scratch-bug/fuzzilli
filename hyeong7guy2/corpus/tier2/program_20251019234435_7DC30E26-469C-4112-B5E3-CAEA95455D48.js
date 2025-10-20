class C0 {
}
const v2 = {};
const v7 = {
    getOwnPropertyDescriptor(a5, a6) {
        this.set = Symbol;
        return this;
    },
};
v7.configurable = C0;
const v8 = new Proxy(v2, v7);
v8.__lookupSetter__();
