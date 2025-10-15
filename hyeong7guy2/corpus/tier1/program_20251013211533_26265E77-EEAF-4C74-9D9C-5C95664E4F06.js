function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
}
new F4(F0, F0, F0, F0);
new F4(undefined);
let v9 = false;
function f10(a11) {
    if (!v9) {
    }
}
for (let i13 = 0; i13 < 20000; ++i13) {
    f10(i13, v2);
}
v9 = false;
