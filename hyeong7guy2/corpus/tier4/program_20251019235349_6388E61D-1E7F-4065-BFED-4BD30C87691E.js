function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 7;
}
const v3 = new F0();
const v4 = v3.h;
const v8 = new Int32Array(29 * 29);
v8[14] = v4;
v8.toSorted();
