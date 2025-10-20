let v0 = 1.657611858765728;
function f1() {
    let v2 = 1073741824;
    const v3 = v2++;
    class C4 {
        constructor(a6, a7) {
            for (let v8 = 0; v8 < 5; v8++) {
                const v9 = v8 + v2;
                v0++;
                super.E &= v9;
            }
        }
    }
    new C4(v3, v3);
    return v0;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
