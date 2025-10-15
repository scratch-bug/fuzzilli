for (let i1 = 0;
    i1 < 25000;
    (() => {
        const v5 = ++i1;
        v5 !== v5;
    })()) {
}
