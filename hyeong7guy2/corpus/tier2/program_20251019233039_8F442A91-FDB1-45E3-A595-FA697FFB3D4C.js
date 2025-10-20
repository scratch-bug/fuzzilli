for (let i = 0; i < 5; i++) {
    for (let i1 = 0;
        i1 < 1000;
        (() => {
            const v5 = i1++;
            const v16 = {
                p(a7, a8, a9, a10) {
                    const v12 = !v5;
                    const t0 = 0;
                    delete t0[3];
                    -1e-15 - v12;
                    return this;
                },
            };
            v16.p();
        })()) {
    }
}
