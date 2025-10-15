function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1702309461;
    this.b = -1702309461;
    this.d = -1702309461;
    const v3 = F0 ^ -1702309461;
    function f4(a5) {
        const v6 = { ...this };
    }
    f4(F0);
    f4(v3);
    const v9 = f4(F0);
    f4(F0);
    f4(f4);
    f4(v9);
}
new F0();
new F0();
