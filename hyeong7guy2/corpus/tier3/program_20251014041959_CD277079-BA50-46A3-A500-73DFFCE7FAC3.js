for (let i1 = 0;
    i1 < 10000;
    (() => {
        const v6 = -(++i1);
        const v7 = v6 >> v6;
        v7 + v7;
    })()) {
}
