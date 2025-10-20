function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
function f6() {
    return F4;
}
function f7(a8, a9) {
    return a8;
}
function poc_func() {
    return F0;
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    function f13(a14) {
        const v15 = { ...this };
        return f13;
    }
    f13();
}
new F11();
