for (let i1 = 0;
    i1 < 20000;
    (() => {
        const v5 = i1++;
        Array.prototype[v5];
    })()) {
}
