for (let i1 = 0;
    (() => {
        const v3 = i1 < 10000;
        !v3;
        return v3;
    })();
    ++i1) {
    const v8 = i1 << i1;
    const v9 = v8 * v8;
    const v10 = [v9,v9,v9,v9,v9];
    let v11 = 3.3;
    v11++;
    const v13 = v10.push(v11);
    v13 * v13;
}
