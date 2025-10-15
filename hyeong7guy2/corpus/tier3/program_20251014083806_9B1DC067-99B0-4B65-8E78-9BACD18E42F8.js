class C3 {
}
const v6 = new Proxy(C3, {});
for (let i8 = 0; i8 < 25000; ++i8) {
    String.prototype.codePointAt.apply(v6, [65536]);
}
