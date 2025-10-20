class C0 {
}
function f1(a2) {
    C0["16" + C0];
    return "16";
}
C0.valueOf = f1;
function f8(a9) {
    const v11 = new SharedArrayBuffer();
    const v13 = new DataView(v11);
    try { v13.getUint16(C0); } catch (e) {}
    return 12234;
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i20 = 0, i21 = 10; i21; i21--) {
}
F15[Symbol.toPrimitive] = f8;
const v31 = {
    o(a29, a30) {
        super[F15] = 12234;
        return F15;
    },
};
v31.o(12234, f8);
