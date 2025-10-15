async function* f1(a2, a3, a4) {
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
