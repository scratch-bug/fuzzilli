function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i7 = 242; i7 < 25000; i7++) {
        F0[2] >>>= 2;
    }
}
new F5();
