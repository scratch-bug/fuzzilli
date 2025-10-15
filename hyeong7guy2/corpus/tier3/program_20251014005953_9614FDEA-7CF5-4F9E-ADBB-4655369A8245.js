function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
let v4 = new F0(F0, F0);
const v5 = [F0];
function f6(a7) {
    const v8 = {};
    for (let i10 = 0;
        i10 < 20000;
        (() => {
            i10++;
            [v4] = v5;
            v8[3];
        })()) {
    }
    return v8;
}
f6(v4);
