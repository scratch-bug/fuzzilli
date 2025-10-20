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
