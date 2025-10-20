function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let i7 = 12; i7 < 10000; ++i7) {
                let v13 = -1 % i7;
                v13++;
                super.b >>>= v13;
            }
        }
    }
    new C2(C2, -1);
    return C2;
}
const v16 = { construct: f0 };
v16.construct(v16, v16, f0, v16, v16);
