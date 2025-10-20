function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i3 = 0;
    i3 < 25000;
    (() => {
        i3++;
        const v9 = Math.floor(F0);
        v9 >>> v9;
    })()) {
}
