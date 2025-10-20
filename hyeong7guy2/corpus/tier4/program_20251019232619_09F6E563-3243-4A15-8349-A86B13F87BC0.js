function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        a3--;
    }
}
new F1();
