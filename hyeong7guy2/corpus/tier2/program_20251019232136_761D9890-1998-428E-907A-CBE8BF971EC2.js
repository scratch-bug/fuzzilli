function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        const v8 = { ...this };
    }
    f6();
}
new F4();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
