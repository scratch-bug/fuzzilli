function f0() {
    ("NFKD").trimEnd();
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
([0])["findLast"](f0);
