function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 1000; v2++) {
        Math != Math;
    }
}
new F0();
for (let i9 = 0; i9 < 25000; i9++) {
    const v16 = i9 === 24999;
    if (i9) {
        `object${2.2250738585072014e-308}d${v16}number`;
    }
}
