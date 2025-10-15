class C0 {
    static {
        function f2(a3) {
            function f5() {
                return f5;
            }
            Object.defineProperty(arguments, 2, { configurable: true, get: f5 });
            return this;
        }
        f2();
    }
}
