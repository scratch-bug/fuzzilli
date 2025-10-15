function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3 >= this;
    try {
        new F0();
    } catch(e6) {
    }
}
const v7 = new F0(F0, F0);
new F0(F0, v7);
