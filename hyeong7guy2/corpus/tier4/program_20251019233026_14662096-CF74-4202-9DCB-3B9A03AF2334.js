function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    for (let i8 = 0, i9 = 10; i8--, i9; i8++, i9--) {
        i8 + i8;
    }
}
new F0(F0, F0);
