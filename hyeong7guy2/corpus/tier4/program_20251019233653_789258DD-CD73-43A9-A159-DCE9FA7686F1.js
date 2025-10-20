function f0(a1, a2) {
    a1.cos();
    for (let v4 = 0; v4 < 5; v4++) {
        ~v4;
    }
    try {
        f0();
    } catch(e7) {
    }
    a2 | a2;
    return a1;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
f0(Math);
