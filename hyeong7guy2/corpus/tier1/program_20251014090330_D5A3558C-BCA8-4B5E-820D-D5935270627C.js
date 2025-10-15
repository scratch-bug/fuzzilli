for (let i1 = 0;
    i1 < 20000;
    (() => {
        const t0 = Temporal.PlainTime;
        t0.second = -3.0;
        i1++;
    })()) {
}
