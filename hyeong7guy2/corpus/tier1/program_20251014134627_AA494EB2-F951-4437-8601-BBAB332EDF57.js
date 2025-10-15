class C1 {
}
const v5 = {
    p(a3, a4) {
        super.e = C1;
        return this;
    },
};
const v8 = new Proxy(v5, { getOwnPropertyDescriptor: Symbol });
try { v8.p(v8, v8, Symbol); } catch (e) {}
