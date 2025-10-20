function f0() {
    ("findIndex")["startsWith"]("findIndex");
    return "startsWith";
}
class C4 extends f0 {
}
new C4();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
