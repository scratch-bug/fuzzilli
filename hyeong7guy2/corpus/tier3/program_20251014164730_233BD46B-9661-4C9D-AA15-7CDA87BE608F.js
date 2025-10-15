function f0() {
    ("NFKD").toString("NFKD", "NFKD", "NFKD", f0, "NFKD");
    return "NFKD";
}
f0.apply(f0, f0, f0, f0);
f0();
%OptimizeFunctionOnNextCall(f0);
([0])["findLast"](f0);
