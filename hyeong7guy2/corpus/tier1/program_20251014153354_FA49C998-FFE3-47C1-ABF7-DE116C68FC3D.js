function f2(a3) {
    a3.toString = Symbol;
    try { (-1565008628n).constructor(a3); } catch (e) {}
    return f2;
}
Object.defineProperty(f2, "valueOf", { writable: true, value: f2 });
f2(f2);
%OptimizeFunctionOnNextCall(f2);
f2(f2);
