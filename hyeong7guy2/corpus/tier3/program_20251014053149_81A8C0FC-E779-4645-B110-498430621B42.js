const v0 = [303313472,65005,46250,-4096,-4,10,7,-29991];
class C1 {
}
async function* f2(a3, a4) {
    await (v0 instanceof C1);
    return v0;
}
f2();
f2();
%OptimizeMaglevOnNextCall(f2);
f2(C1, C1);
