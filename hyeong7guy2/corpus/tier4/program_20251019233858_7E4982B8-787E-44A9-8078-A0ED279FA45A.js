function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [65535,65536];
    for (let i4 = 1;
        i4 < 20000;
        (() => {
            v2.length = i4;
            i4++;
        })()) {
    }
}
new F0();
new F0();
