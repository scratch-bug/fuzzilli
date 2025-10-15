function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i7 = 0;
    (() => {
        const v9 = i7 < 20000;
        new F1(v9, 20000, 20000);
        for (let v11 = 0; v11 < 5; v11++) {
        }
        F1[i7] <<= 64;
        return v9;
    })();
    i7++) {
}
