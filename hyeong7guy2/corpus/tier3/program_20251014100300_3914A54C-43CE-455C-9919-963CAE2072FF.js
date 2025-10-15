function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6--;
    const v8 = this.constructor;
    v8.toString();
    try { new v8(true, true); } catch (e) {}
    this.h = a6;
}
new F3(-2, -2);
new F3(110, -2);
new F3(F3, -2);
