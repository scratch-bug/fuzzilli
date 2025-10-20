function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [];
    for (let i6 = 0; i6 < 20000; ++i6) {
        v4[i6] = i6;
    }
    JSON.stringify({ b: v4 });
}
new F0();
