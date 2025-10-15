function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new BigUint64Array(a8);
    let v10 = 10;
    for (; v10--;) {
        const v12 = [65537,-10,256,-536870912,-53389,-8,-16];
        for (const v13 of v9) {
        }
        try { a7(v9, ..."f", a8, ...v12); } catch (e) {}
    }
}
new F4();
new F4(F4, WeakMap, 3319);
