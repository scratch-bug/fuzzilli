class C1 {
}
for (let i3 = 0; i3 < 25000; ++i3) {
    String.prototype.codePointAt.apply(C1, [65536]);
}
