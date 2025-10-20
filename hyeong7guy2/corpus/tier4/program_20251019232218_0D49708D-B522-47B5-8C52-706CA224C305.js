for (let i1 = 0; i1 < 25000; ++i1) {
    const v7 = {};
    const v8 = [i1,i1];
    let v9 = v7.idx;
    for (let v10 = 0; v10 < 5; v10++) {
        v9 = v9 ?? v10;
    }
    v8[v9] = 6.6;
}
