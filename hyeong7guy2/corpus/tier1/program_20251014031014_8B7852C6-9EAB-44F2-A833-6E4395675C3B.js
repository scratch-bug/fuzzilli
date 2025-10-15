const v1 = new Uint8ClampedArray();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        new F2();
    } catch(e7) {
    }
    this.g = v1;
}
new F2();
new F2();
gc();
