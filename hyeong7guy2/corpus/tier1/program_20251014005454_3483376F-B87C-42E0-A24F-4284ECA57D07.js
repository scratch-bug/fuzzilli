function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new this(); } catch (e) {}
    Math.log10(268435441);
}
new F0();
new F0();
