function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4[6];
}
new F2(9007199254740991n);
new F2("number");
