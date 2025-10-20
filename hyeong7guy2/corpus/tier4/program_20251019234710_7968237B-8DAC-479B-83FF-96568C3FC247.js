function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C4 {
    }
    Array[17] = C4;
    Object.seal(Array);
}
const v8 = new F0();
new F0(v8, v8);
