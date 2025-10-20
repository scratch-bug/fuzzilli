for (let i1 = 0;
    i1 < 10000;
    (() => {
        const v5 = i1++;
        v5 - v5;
    })()) {
    const v8 = -i1;
    const v9 = v8 >= v8;
    v9 >>> v9;
}
