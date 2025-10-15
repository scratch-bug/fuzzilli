function f3() {
    return f3;
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F4(f3, a9, Uint16Array, 1); } catch (e) {}
    for (let i = 0; i < 5; i++) {
        a9.c;
    }
}
new F4(F4, Int32Array, Uint16Array, Uint16Array);
