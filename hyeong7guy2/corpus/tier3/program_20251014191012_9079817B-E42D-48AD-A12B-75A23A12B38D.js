function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float64Array();
    for (let i9 = 0; i9 < 25000; i9++) {
        let v16 = 2;
        ({"length":v16,} = v7);
        [[1,v16]];
    }
}
new F0(F0, F0, F0, F0);
