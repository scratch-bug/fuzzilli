function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (const v2 in this) {
    }
}
new F0();
