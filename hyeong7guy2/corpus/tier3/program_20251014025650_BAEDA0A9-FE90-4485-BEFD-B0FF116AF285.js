function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = a3 > a4;
    try {
        new F1(a3, v5);
    } catch(e7) {
    }
}
new F1(Map);
new F1(F1, Map);
