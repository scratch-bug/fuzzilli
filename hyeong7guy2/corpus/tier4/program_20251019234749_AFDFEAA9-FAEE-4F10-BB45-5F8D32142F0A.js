const v0 = /\x01?/syv;
v0.b = v0;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a4.replace(v0);
}
new F2("NFKC");
