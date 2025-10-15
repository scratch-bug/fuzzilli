const v1 = class {
    static {
        function f3(a4, a5) {
            const v6 = { ...a5, a: a5 };
            try { v6(); } catch (e) {}
            return v6;
        }
        f3("symbol", f3());
        for (let v10 = 0; v10 < 100; v10++) {
            f3();
        }
    }
}
