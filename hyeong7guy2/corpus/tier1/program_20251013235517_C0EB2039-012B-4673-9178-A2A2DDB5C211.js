function f0(a1, a2, a3) {
    function f5(a6, a7) {
        function f10(a11, a12) {
            const v13 = new a11(...a12);
            return v13;
        }
        const v14 = { construct: f10 };
        const v15 = new Proxy(v14, a2);
        const P = v15;
        function f17() {
            P(a3, null, f17);
            return v14;
        }
        return 0;
    }
    Worker(f5);
    return f0;
}
