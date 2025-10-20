try {
    for (let v0 = 0; v0 < 5; v0++) {
        for (let i2 = 0;
            i2 < 20000;
            (() => {
                i2++;
                new Uint16Array();
            })()) {
        }
        v0(v0, v0, v0);
    }
} catch(e11) {
    e11.b = e11;
}
