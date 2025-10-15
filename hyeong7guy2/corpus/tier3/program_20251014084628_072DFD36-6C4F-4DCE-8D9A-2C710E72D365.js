class C0 {
}
function f1() {
    return { 3342: C0 };
}
f1();
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
