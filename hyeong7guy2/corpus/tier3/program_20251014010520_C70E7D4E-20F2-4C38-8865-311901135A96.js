function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    let v4;
    try { v4 = new v3(); } catch (e) {}
    ~v4;
}
new F0();
new F0();
