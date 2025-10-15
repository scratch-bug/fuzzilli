function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Symbol.toPrimitive;
    const v6 = Object(v4);
    for (let v7 = 0; v7 < 25; v7++) {
        v6[v7] = v4;
    }
}
new F0(F0);
