class C1 extends WeakSet {
    [WeakSet] = WeakSet;
}
let v3;
try { v3 = new Symbol(Symbol); } catch (e) {}
function f4(a5, a6, a7) {
    a5 ^ a5;
    new C1(v3);
    return f4;
}
const v10 = f4();
v10();
%OptimizeMaglevOnNextCall(f4);
f4(C1, f4, v10);
