function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 {
    }
    C7.d = Map;
    C7.d = a4;
    for (let i10 = 0; i10 < 20000; ++i10) {
        C7.d *= 1.1356230574660949e+308;
    }
}
new F1();
