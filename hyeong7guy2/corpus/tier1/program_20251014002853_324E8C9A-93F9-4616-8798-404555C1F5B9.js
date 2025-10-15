function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = [F0];
for (let i7 = 0;
    i7 < 25000;
    (() => {
        ++i7;
        Symbol[Symbol.matchAll] = i7;
    })()) {
}
for (let i16 = -17948; i16; i16 / i16, ++i16) {
}
const v21 = {};
for (let i23 = 0;
    i23 < 20000;
    (() => {
        i23++;
        [F0] = v4;
        v21[3];
    })()) {
}
try { WebAssembly.promising(F0); } catch (e) {}
