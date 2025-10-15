function f0(a1) {
    return a1;
}
function f2(a3) {
    const v5 = Array();
    v5.unshift(v5);
}
f0.toString = f2;
const t8 = f0.constructor;
t8(f0);
