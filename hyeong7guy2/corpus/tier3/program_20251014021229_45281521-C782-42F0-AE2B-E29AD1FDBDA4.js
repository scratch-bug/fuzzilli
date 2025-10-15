for (let i1 = 0;
    i1 < 20000;
    (() => {
        ++i1;
        let v6 = 0;
        do {
            v6++;
        } while (v6 < 0)
    })()) {
}
