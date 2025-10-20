function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return F0;
        }
        Symbol.numberingSystem = f5;
        const t7 = Intl.RelativeTimeFormat;
        new t7("gu", Symbol);
        return F0;
    }
    try { f4(); } catch (e) {}
}
new F0();
