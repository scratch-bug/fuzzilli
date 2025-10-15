function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = this.constructor;
    t5(a6);
}
("round").localeCompare(F4, F0);
