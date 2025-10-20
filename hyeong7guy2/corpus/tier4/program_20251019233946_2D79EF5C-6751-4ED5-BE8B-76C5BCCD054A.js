const v0 = [93352569,-1658847038,268435439,118544996,0,1073741824];
class C1 {
}
let v3 = class extends C1 {
}
function* f5(a6, a7) {
    yield* "valueOf";
    [a7,a6,v3] = "valueOf";
    delete v0[a6];
    this.b *= -2.220446049250313e-16;
    return a7;
}
const v10 = f5();
v10.toArray(C1, v3, v10, v10);
%OptimizeMaglevOnNextCall(f5);
f5(-2.220446049250313e-16, v10);
