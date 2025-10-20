function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                let v8 = v6 + -9007199254740992;
                v8++;
                super.getDate *= v8;
            }
        }
    }
    new C2(-9007199254740992, f0);
    return -9007199254740992;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
