class C0 {
    constructor(a2, a3) {
        try { a3(); } catch (e) {}
        for (let i6 = 0; i6 < 10000; ++i6) {
            function f12() {
                return arguments;
            }
            f12(1.1);
        }
    }
}
new C0();
