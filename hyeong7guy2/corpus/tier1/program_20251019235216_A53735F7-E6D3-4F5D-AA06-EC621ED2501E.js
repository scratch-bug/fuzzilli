function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
v4.length = F0;
for (let i6 = 0;
    i6 < 20000;
    (() => {
        i6++;
        function f11(a12) {
            Math.min(f11);
            return f11;
        }
        f11(F0);
    })()) {
}
v4.length = 1;
