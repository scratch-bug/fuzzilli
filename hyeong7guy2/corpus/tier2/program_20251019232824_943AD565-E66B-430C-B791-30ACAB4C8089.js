let v2 = 882;
function f3() {
    Date(Symbol, Date, v2);
    return Symbol;
}
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3();
with (d8) {
    v2--;
}
