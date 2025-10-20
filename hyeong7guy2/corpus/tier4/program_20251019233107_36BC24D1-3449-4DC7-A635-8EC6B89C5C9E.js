function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = Intl.NumberFormat;
            v18("gn", { notation: "scientific" }).formatRange(-1000000000000.0, 267577799);
        }
        new F10();
    }
    new F6();
}
new F0(F0, F0, F0);
