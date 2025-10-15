function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = {
        [Symbol]() {
        },
        set d(a6) {
        },
        set a(a8) {
        },
        a: 1.1,
    };
}
new F1();
