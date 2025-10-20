const v2 = new BigUint64Array(990);
function f3() {
    return v2;
}
class C4 extends f3 {
}
const v5 = new C4();
function f6() {
    return v5[4];
}
f6();
f6();
%OptimizeFunctionOnNextCall(f6);
f6();
