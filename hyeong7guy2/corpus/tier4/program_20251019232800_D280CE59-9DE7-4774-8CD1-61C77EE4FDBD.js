function f0(a1) {
    return true;
}
const v4 = new ArrayBuffer();
v4.toString = f0;
v4.transferToFixedLength(v4);
