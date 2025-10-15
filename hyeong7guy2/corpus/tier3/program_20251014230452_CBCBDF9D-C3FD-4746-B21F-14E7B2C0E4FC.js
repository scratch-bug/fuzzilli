const v1 = /(ab|cde)\1/vg;
v1.f = v1;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a4.replace(v1, a5);
}
new F2("NFKC", F2);
