function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 127;
}
const v3 = new F0();
const v4 = v3.e;
function f5(a6) {
    arguments[0] = arguments;
    return v4;
}
f5(v4);
