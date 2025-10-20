function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = { a: 1 };
    const v4 = { ...v3 };
    const v6 = { a: 1.1 };
}
const v7 = new F0();
const t7 = v7.constructor;
new t7(F0, F0);
