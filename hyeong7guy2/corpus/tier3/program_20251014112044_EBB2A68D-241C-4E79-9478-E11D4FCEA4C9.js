for (let i1 = 0;
    (() => {
        const v3 = i1 < 1000;
        !v3;
        return v3;
    })();
    (() => {
        i1++;
        function F7() {
            if (!new.target) { throw 'must be called with new'; }
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F7();
    })()) {
}
