function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = [F0,F0,F0,F0,F0];
    for (let i8 = 0;
        i8 < 30000;
        (() => {
            i8++;
            {
            }
        })()) {
        v6[8] = -16;
        v6 = [];
    }
}
new F0();
