const v1 = /(ab|cde)\1/gv;
v1.f = v1;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7("NFKC"); } catch (e) {}
    a4.replace(v1);
}
new F2("NFKC");
