function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5, a6) {
    return a5;
}
F0[Symbol.toPrimitive] = f4;
function f9() {
    ("🙌🏿").fontsize(f4, "🙌🏿", F0).indexOf(F0);
    return F0;
}
({ construct: f9 }).construct();
