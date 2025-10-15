for (let i1 = 0;
    i1 < 10000;
    (() => {
        i1++;
        const v8 = new Uint16Array(512);
        v8[10] = 512;
    })()) {
}
