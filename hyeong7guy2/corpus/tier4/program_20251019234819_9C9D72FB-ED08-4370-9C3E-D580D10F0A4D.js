function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        try { new F5(this, a8, a7, a7); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            d = ("zTckz").length;
        }
    }
    new F5("zTckz", a3, a4, F5);
}
new F1("zTckz", F1);
