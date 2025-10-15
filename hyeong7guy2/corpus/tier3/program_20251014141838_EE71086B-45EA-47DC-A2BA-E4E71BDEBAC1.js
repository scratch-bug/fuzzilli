function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i7 = 4096; i7 < 25000; ++i7) {
    +{};
    new Proxy(F0, {});
}
