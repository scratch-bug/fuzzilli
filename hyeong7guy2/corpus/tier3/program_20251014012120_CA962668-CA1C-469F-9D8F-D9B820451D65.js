for (let i1 = 4;
    i1 < 25000;
    (() => {
        const v5 = i1++;
        v5 % v5;
    })()) {
}
