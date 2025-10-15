function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F0(this); } catch (e) {}
    for (let i = 0; i < 5; i++) {
        new Proxy(this, {});
        d = a2;
    }
}
new F0();
