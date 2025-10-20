function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        const v10 = {
            ...a7,
            get e() {
                this.b = this;
                return this;
            },
            get f() {
                return "symbol";
            },
        };
        return v10;
    }
    f5("symbol", f5());
}
new F0(F0, F0);
