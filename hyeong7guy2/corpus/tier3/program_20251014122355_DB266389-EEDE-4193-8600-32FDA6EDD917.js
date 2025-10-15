function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    let v3 = 21709n;
    v3 **= v3;
}
new F0(F0);
