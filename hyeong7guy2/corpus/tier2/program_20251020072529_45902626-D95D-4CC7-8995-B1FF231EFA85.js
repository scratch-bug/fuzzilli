function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [F1,F1,F1,F1];
    v5[6726] = 245;
    for (let i7 = 0; i7 < 20000; ++i7) {
        v5[i7] = i7;
    }
    JSON.stringify({ b: v5 });
}
new F1(F1, 245);
