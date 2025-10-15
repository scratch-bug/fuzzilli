for (let i1 = 0;
    i1 < 20000;
    (() => {
        const v5 = i1++;
        const v6 = v5 >> v5;
        const v7 = v6 + v6;
        v7 / v7;
    })()) {
}
