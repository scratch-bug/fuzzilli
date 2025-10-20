const v1 = class extends Uint8Array {
}
const v2 = new v1();
function f3() {
    class C4 {
        constructor(a6, a7) {
            const v8 = a6.length;
            v8 >> v8;
        }
    }
    new C4(v2);
    return v2;
}
f3.apply();
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
