class C2 {
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(); } catch (e) {}
    a8 % a8;
    this.g = a7;
}
new F3(C2, 32673, C2, 13n);
new F3(C2, C2, 32673);
