function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let v4 = 0; v4 < 500; v4++) {
}
const v8 = new Uint16Array(3);
v8.indexOf(v2);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
