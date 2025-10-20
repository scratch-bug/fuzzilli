async function* f1(a2, a3) {
    await -11326;
    await -256;
    return yield -11326;
}
f1();
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
