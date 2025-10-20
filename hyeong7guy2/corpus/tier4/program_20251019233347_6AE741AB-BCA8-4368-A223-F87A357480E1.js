const v0 = /[^abc+?\1(a)]/dsi;
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = {
        get f() {
            return this;
        },
        [v0](a7, a8) {
        },
        a: 1.1,
    };
    v9[Symbol.toStringTag] = v9;
}
new F1();
new F1();
