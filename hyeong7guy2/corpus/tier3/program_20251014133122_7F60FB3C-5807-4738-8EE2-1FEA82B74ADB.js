for (let i1 = 0;
    i1 < 100000;
    (() => {
        ++i1;
        try {
        } catch(e6) {
        } finally {
        }
    })()) {
    Math.tan(9223372036854775807);
}
