function f0() {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
}
function f8() {
}
function F9() {
    if (!new.target) { throw 'must be called with new'; }
}
function f11() {
}
function f12(a13, a14) {
}
function poc_func() {
}
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    function f18(a19) {
        const v20 = { ...this };
    }
    f18();
}
new F16();
