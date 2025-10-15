for (let i1 = 0;
    i1 < 20000;
    (() => {
        i1++;
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
        (0 in {}) instanceof F6;
    })()) {
}
