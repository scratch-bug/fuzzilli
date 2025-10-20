class C1 extends Uint8Array {
}
const v2 = new C1();
const v3 = v2.buffer;
v3.transferToFixedLength(Uint8Array, v3);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
F5.valueOf.apply(C1, v2);
