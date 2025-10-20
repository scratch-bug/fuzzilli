const v0 = /\x01?/dsmvi;
function f1() {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a6(a5, F3); } catch (e) {}
        a5.replace(v0, a6);
    }
    const v10 = new F3("NFKC", F3);
    return v10;
}
try { f1(); } catch (e) {}
