function f0() {
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
}
function f8(a9, a10) {
}
function f11() {
}
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    function f14(a15) {
        for (let v16 = 0; v16 < 32; v16++) {
            this["p" + v16] = v16;
        }
        const v19 = { ...this };
    }
    f14();
}
new F12();
function f22(a23, a24) {
}
