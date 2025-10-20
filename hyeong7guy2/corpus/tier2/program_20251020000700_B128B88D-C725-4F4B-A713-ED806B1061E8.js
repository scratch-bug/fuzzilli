function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                let v7 = v6 | -9007199254740992;
                v7++;
                super.getDate *= v7;
            }
        }
    }
    const v9 = new C2(C2, -9007199254740992);
    return v9;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
