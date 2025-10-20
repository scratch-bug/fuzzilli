async function* f1(a2, a3, a4, a5) {
    yield await a4;
    return WeakMap;
}
const v8 = f1();
const v9 = f1();
%OptimizeMaglevOnNextCall(f1);
f1(v8, f1, v9, v8);
