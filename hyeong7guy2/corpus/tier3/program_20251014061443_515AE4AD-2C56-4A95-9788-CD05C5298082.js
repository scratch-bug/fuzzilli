for (let i1 = 0;
    i1 < 20000;
    (() => {
        ++i1;
        let v6 = 129;
        for (let v7 = 0; v7 < 5; v7++) {
            for (let v8 = 0; v8 < 5; v8++) {
                v6 ^ v7;
                v6 = v8;
            }
        }
    })()) {
}
