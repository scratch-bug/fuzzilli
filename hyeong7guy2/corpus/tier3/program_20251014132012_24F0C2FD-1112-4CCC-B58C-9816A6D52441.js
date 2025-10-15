const v0 = class {
}
async function* f1(a2, a3, a4) {
    arguments[v0];
    return a2;
}
f1();
f1(v0, v0, v0);
%OptimizeMaglevOnNextCall(f1);
f1();
