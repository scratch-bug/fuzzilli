function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Array(a2);
    v5[7] = v5;
    const v7 = Object.seal(v5);
    v7.indexOf(v7, v7);
}
new F0(F0, F0);
