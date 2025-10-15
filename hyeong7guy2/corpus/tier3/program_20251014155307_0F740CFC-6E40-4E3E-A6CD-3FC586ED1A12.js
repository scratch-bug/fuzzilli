function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F10(F6, F6);
    F0 < v14.constructor;
}
new F6(F6, F0);
("🙌🏿").fontsize(F0, "🙌🏿", F0, "🙌🏿");
