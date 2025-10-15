function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        return 129;
    }
    Intl[Symbol.toPrimitive] = f5;
    const t6 = Intl.DateTimeFormat;
    t6().format(Intl);
}
new F2();
