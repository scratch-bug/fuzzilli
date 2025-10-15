function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = {
        set d(a4) {
        },
        set a(a6) {
        },
        a: 1.1,
    };
}
new F0();
