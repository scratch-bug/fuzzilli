function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
for (let i7 = 0;
    i7 < 1000;
    (() => {
        i7++;
        function F12() {
            if (!new.target) { throw 'must be called with new'; }
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F12();
    })()) {
}
