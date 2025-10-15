function f1() {
    ("NFKD").codePointAt(Int32Array);
    return "NFKD";
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
([0])["findLast"](f1);
