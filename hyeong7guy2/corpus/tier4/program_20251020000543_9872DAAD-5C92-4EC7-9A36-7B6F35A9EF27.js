function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 7;
}
const v3 = new F0();
const v4 = v3.h;
const v7 = new Int32Array(29);
v7[14] = v4;
v7.toSorted();
