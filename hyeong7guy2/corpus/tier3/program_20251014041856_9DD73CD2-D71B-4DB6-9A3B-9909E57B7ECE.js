const v0 = /D\p{Nd}?/musd;
async function* f1(a2, a3, a4) {
    yield await a3;
    return v0;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
