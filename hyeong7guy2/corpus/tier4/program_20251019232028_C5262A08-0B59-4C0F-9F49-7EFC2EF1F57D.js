const v3 = new Uint16Array(64);
function f4(a5, a6, a7) {
    v3[15] ^= 0;
    return a7;
}
f4(0, f4.call(), 64);
%OptimizeMaglevOnNextCall(f4);
f4();
