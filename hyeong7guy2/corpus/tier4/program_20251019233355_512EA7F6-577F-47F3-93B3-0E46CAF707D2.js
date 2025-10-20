function f0() {
    return f0;
}
for (let i2 = 0;
    (() => {
        for (const v3 in i2) {
        }
        return i2 < 25000;
    })();
    ++i2) {
    const v11 = typeof i2 === "undefined";
    const v13 = new Int32Array("undefined", i2, i2);
    v13.reduceRight(f0, v11);
}
