const v0 = [303313472,65005,46250,-4096,-4,10,7,-29991];
class C2 {
}
async function* f3(a4, a5) {
    v0 instanceof C2;
    await false;
    return false;
}
f3().next(v0);
%OptimizeMaglevOnNextCall(f3);
