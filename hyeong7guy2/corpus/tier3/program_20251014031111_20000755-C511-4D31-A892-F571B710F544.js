function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        a8 in a9;
        return 1000;
    }
    try { f7(a4, "b"); } catch (e) {}
}
new F2(1000);
