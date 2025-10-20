class C1 {
    static {
        function f3(a4, a5) {
            const v7 = Temporal.ZonedDateTime;
            try { v7.compare("🙌🏿"); } catch (e) {}
        }
        this[Symbol.toPrimitive] = f3;
        super[this];
    }
}
