function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [-1,-8,-2147483648,-9223372036854775808,268435440,9];
    const v7 = new Uint16Array(16);
    v7.set(v5);
    v7.sort(a3);
}
new F0();
