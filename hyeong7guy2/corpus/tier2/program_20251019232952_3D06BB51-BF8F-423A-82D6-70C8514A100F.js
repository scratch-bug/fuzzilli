function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        try { new F6(a11, a11, 3691, 1); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            d = a8;
        }
    }
    new F6();
}
new F0();
