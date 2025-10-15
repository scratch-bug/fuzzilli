class C0 {
    static {
        function f2(a3) {
            function f4() {
            }
            f4();
            a3[0] = 2.2;
            return this;
        }
        const v8 = [1.1];
        for (let i10 = 0; i10 < 20000; i10++) {
            f2(v8);
        }
    }
}
