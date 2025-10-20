function f0(a1, a2, a3) {
    const v5 = /[a[a-z]]/gv;
    function F6(a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        a8.replace(v5, a9);
    }
    new F6("c", f0);
    return "c";
}
const v13 = {};
v13.constructor = f0;
try { v13.constructor(); } catch (e) {}
