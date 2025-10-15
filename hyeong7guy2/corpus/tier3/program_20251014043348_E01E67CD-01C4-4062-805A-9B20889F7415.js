class C1 {
    constructor(a3, a4) {
        for (let i6 = 0; i6 < 10000; ++i6) {
            function f12() {
                return arguments;
            }
            const v14 = f12();
            f12(1.1, 2.2, -1n, 2.2);
            v14[0];
        }
    }
}
new C1(C1, C1);
