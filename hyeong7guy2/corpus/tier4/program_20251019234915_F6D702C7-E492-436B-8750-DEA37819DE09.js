function f0() {
    return f0;
}
for (let i2 = 0; i2 < 20000; ++i2) {
    const v9 = [0.39346707945810944,-991803.8963643727];
    v9[15] |= 256;
    v9.reduceRight(f0);
}
