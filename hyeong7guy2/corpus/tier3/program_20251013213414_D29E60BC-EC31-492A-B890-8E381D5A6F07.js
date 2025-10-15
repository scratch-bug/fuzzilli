function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        new F0();
    } catch(e5) {
    }
}
new F0();
new F0();
