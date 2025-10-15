class C1 {
}
function f2(a3) {
    let v4 = a3 ** a3;
    v4--;
    return f2;
}
C1.constructor = f2;
const t8 = C1.constructor;
t8(1000n);
