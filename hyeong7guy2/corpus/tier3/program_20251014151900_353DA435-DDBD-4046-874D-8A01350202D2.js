function F2() {
    if (!new.target) { throw 'must be called with new'; }
    ("NFKD").constructor.fromCodePoint(1403);
}
new F2();
