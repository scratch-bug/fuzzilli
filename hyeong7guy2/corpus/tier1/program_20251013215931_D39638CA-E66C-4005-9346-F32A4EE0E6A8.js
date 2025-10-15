class C0 {
    constructor(a2, a3) {
        for (let i5 = 0; i5 < 10000; ++i5) {
            function f11() {
                return arguments;
            }
            const v13 = f11();
            f11(1.1, 2.2);
            v13[0];
        }
    }
}
new C0();
