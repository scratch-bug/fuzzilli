function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = [F0];
for (let i6 = 0;
    i6 < 20000;
    (() => {
        let v10 = i6++;
        [v10] = v4;
    })()) {
}
