function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = {};
    function f6() {
        return this;
    }
    const v7 = new Proxy(f6, v4);
    ([-9007199254740991]).concat.call(v7);
    const v11 = this.constructor;
    try { new v11(); } catch (e) {}
}
new F0();
