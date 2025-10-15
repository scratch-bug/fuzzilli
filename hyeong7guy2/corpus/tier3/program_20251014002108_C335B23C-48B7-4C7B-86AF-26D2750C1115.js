function f2(a3) {
    const v4 = { [Date]: 13n };
    return 13n;
}
const v5 = f2();
f2(13n);
%OptimizeFunctionOnNextCall(f2);
f2(v5);
