class C1 extends Int16Array {
}
const v2 = new C1();
function f3() {
    v2 instanceof Int16Array;
    return v2;
}
f3.call(Int16Array, f3, f3, v2);
const v6 = f3();
v6.f = v6;
%OptimizeFunctionOnNextCall(f3);
f3();
