function f0(a1, a2, a3, a4) {
    return a4;
}
function f5() {
    return 21709n << 21709n;
}
f0.toString = f5;
const v8 = f0.toString(f5);
v8.toLocaleString(v8);
