function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    const v3 = v1.constructor;
    try { new v3(); } catch (e) {}
    let v5 = 0;
    for (let i = 0; i < 5; i++) {
        v5++;
    }
    const v7 = v1--;
    v7 % v7;
    const t10 = v1.constructor;
    t10().toExponential().localeCompare(v1);
}
new F0(F0);
