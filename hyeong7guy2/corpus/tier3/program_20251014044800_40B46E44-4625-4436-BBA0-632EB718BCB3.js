for (let i1 = 0;
    i1 < 20000;
    (() => {
        i1++;
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F7.b &= 11;
    })()) {
}
