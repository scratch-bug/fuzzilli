function f2() {
    const v3 = new Uint32Array();
    v3.copyWithin(v3);
    return v3;
}
Int32Array.constructor = f2;
const t6 = Int32Array.constructor;
t6(Uint32Array);
