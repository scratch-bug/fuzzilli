function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F2(a7, a7, 3691, 4294967296); } catch (e) {}
    let v9 = 0;
    for (let i = 0; i < 5; i++) {
        f = a4;
        const v11 = v9++;
        v11 ^ v11;
    }
}
new F2(4294967296, F2, 3691, F2);
