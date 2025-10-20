function f0(a1, a2, a3) {
    return f0;
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
function f9() {
    return f9;
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
}
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
function f21(a22) {
    return a22;
}
function f23() {
    return F10;
}
function f24() {
    return F12;
}
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    function f27(a28) {
        return { ...this };
    }
    f27();
}
new F25();
