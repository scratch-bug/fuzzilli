const v9 = {
    construct(a1, a2) {
        new Int8Array(1065172329);
        const t1 = Intl.ListFormat;
        new t1();
        return this;
    },
};
v9.construct();
function f12() {
    return Proxy;
}
const v13 = new Proxy(f12, v9);
try { new v13(Proxy, v13, v13); } catch (e) {}
