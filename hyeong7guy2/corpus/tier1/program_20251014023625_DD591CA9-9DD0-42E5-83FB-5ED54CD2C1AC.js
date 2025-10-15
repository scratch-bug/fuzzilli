function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        const v8 = { ...this };
    }
    f6();
}
new F4();
function f11() {
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
function f16() {
}
function f17() {
}
function f18(a19) {
}
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
}
function f26() {
}
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
}
function f31(a32) {
}
