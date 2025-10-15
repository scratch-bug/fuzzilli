function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
for (let i7 = 0;
    i7 < 1000;
    (() => {
        i7++;
        const v17 = {
            p(a13, a14, a15, a16) {
            },
        };
        v17.p();
        function F19() {
            if (!new.target) { throw 'must be called with new'; }
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F19();
    })()) {
}
