function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 7;
}
const v3 = new F0();
const v4 = v3.h;
let v5 = 29;
v5++;
const v8 = new Int32Array(v5);
v8[14] = v4;
v8.toSorted();
