function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2();
}
function f7() {
    gc({ execution: "async" });
    with (d8) {
        const t8 = test.FastCAPI;
        new t8();
    }
}
F0.constructor = f7;
new F0();
