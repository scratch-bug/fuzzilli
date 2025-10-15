let v0 = -256;
function* f1(a2, a3) {
    v0++;
    Array(262144);
    return 262144;
}
f1(f1, v0).toArray();
%OptimizeMaglevOnNextCall(f1);
f1();
