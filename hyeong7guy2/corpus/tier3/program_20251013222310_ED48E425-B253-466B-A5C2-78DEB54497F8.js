with (1024) {
    class C1 {
        constructor(a3, a4, a5) {
            try { this(1024, this); } catch (e) {}
        }
    }
    const v7 = new C1();
    try { v7(1024, C1, v7); } catch (e) {}
    const v17 = {
        [Symbol]() {
            function f11(a12, a13, a14, a15) {
                return a13;
            }
            f11(this, Symbol);
        },
    };
}
