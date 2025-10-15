const v2 = class {
    static {
        function f4(a5, a6) {
            return { ...a6, a: a6 };
        }
        const v9 = f4("symbol", f4(this, 1000000000000.0));
        f4(this, "symbol");
        f4(f4, v9);
    }
}
