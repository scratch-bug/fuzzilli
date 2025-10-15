function f1(a2) {
    try { a2(8); } catch (e) {}
    globalThis.console.trace();
    return globalThis;
}
f1(f1);
for (let i10 = 0, i11 = 10; i11; i11--) {
}
