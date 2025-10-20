class C1 {
}
function f2() {
    const v3 = typeof -5n;
    try {
        C1.UTC("string", v3);
    } catch(e6) {
    }
    return v3;
}
class C7 extends f2 {
}
new C7();
new C7();
%OptimizeFunctionOnNextCall(f2);
f2();
