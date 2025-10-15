for (let i1 = 0;
    i1 < 25000;
    (() => {
        i1++;
        const v8 = Math.ceil(-1e-15);
        const v9 = { f: v8 };
    })()) {
}
