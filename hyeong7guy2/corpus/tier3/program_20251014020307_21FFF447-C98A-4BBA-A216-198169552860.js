function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = [F1];
for (let i7 = 0;
    i7 < 20000;
    (() => {
        i7++;
        [Uint16Array] = v5;
        new Uint16Array();
    })()) {
}
