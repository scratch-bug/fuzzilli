function f1() {
    return 10;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = {};
    v6.get = f1;
    function f8() {
        return this;
    }
    const v9 = new Proxy(f8, v6);
    ([-9007199254740991]).concat.call(v9);
}
new F2();
