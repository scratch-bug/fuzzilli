function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8, a9) {
            const v11 = Intl.DateTimeFormat;
            v11("ss", { dateStyle: "full" }).format();
            return v11;
        }
        this.constructor = f7;
        const t10 = this.constructor;
        t10();
    }
    new F4();
}
new F0();
