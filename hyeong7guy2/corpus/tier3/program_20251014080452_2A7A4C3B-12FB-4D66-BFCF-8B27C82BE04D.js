class C1 {
    static {
        function f3(a4, a5) {
            const v7 = Temporal.ZonedDateTime;
            try { v7.compare("-2147483647", v7); } catch (e) {}
            return a4;
        }
        this[Symbol.toPrimitive] = f3;
        super[this];
    }
}
