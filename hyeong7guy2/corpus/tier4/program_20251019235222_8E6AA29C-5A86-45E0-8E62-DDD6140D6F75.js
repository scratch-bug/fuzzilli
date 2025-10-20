for (let i2 = 0;
    i2 < 20000;
    (() => {
        const v6 = i2++;
        try {
            let v7 = 9007199254740990;
            v6 - v7;
            v7 ** -1000000000000.0;
            --v7;
        } catch(e12) {
        } finally {
        }
    })()) {
}
