function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    this.d = a6;
}
new F2(7, 2147483647, 7);
new F2(7, 2147483647, 2147483647);
const v12 = new Float32Array(255);
new Int8Array(v12);
