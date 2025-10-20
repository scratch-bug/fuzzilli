function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        return a9 in a10;
    }
    try { f8("unregister"); } catch (e) {}
    try { f8(a5, "b"); } catch (e) {}
}
new F3(1000);
