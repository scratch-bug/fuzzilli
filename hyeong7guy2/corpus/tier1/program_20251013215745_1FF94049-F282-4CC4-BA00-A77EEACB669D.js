function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 5; v2++) {
        v2 / v2;
    }
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    Float32Array.BYTES_PER_ELEMENT = Float32Array;
    return F0;
}
new F4();
class C9 {
}
C9.g = C9;
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 127;
}
F12.length;
gc({ execution: "async" });
