function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i9 = 0;
    (() => {
        const v11 = i9 < 20000;
        new F3();
        F3[i9] <<= 64;
        return v11;
    })();
    i9++) {
}
class C16 extends F1 {
}
