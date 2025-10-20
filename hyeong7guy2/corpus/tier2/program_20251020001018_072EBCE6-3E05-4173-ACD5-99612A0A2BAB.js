function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function f10() {
                    return f7;
                }
                const v11 = class extends f10 {
                }
                function f12(a13) {
                    Symbol().__defineGetter__(v11, f12);
                    return a6;
                }
                f12.call(a6, this);
                f12();
                return F0;
            }
            f8.call(a6);
            f8();
            return this;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v20 = new F3();
    v20.toString;
}
new F0();
with (Map) {
    function F24(a26, a27, a28, a29) {
        if (!new.target) { throw 'must be called with new'; }
        try { this(Map); } catch (e) {}
    }
    new F24(F24, F24, F24, F24);
}
