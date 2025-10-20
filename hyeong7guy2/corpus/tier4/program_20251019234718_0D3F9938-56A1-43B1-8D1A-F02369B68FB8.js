class C1 {
    static {
        function f3() {
            let v4 = this;
            function f5(a6) {
                v4[a6] /= -5.0;
                return f3;
            }
            v4 = this;
            delete this[this];
            return this;
        }
        new Worker(f3, { type: "function" });
    }
}
