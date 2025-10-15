const v0 = [303313472,65005,46250,-4096,-4,10,7,-29991];
class C2 {
}
async function* f3(a4, a5) {
    v0 instanceof C2;
    [await false];
}
f3();
const v10 = f3();
%OptimizeMaglevOnNextCall(f3);
f3(false, v10);
