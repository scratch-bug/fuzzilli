function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    return f3;
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
function f6() {
    return f3;
}
function f7(a8, a9) {
    return f6;
}
function f10() {
    return f10;
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    function f13(a14) {
        for (let v15 = 0; v15 < 32; v15++) {
            this["p" + v15] = v15;
        }
        const v18 = { ...this };
        return F4;
    }
    f13();
}
new F11();
function f21(a22, a23) {
    return a22;
}
