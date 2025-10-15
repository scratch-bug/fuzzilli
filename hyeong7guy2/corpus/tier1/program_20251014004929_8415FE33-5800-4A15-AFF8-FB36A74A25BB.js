function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
function f12(a13) {
}
function f14() {
}
function f15() {
}
for (let i17 = 0; i17 < 20000; i17++) {
    function f23() {
    }
}
function F24() {
    if (!new.target) { throw 'must be called with new'; }
    function f26(a27) {
        const v28 = { ...this };
    }
    f26();
}
new F24();
