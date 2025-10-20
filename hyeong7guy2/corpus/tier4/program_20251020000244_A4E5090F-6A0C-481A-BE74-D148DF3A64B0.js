function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        try { a5.constructor(); } catch (e) {}
    }
    const v8 = new F3();
    const t7 = v8.constructor;
    new t7(-21111n);
}
new F1();
