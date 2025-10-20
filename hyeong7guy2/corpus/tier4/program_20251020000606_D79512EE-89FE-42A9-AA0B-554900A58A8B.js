function f2() {
    return 10;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = {};
    v7.has = a5;
    v7.get = f2;
    function f9() {
        return this;
    }
    const v10 = new Proxy(f9, v7);
    ([-9007199254740991]).concat.call(v10);
}
try { new F3(5); } catch (e) {}
