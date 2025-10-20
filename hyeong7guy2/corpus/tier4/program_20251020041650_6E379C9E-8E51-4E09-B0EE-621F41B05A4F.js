const v1 = Symbol.for();
function f2() {
    class C3 {
        constructor(a5, a6) {
            a6 * a6;
        }
    }
    let v8;
    try { v8 = new C3(C3, v1); } catch (e) {}
    return v8;
}
f2();
f2();
%OptimizeFunctionOnNextCall(f2);
f2();
