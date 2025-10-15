for (let i2 = 0; i2 < 20000; i2++) {
    const v9 = i2 / 2;
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        function f14(a15, a16, a17) {
            return a12;
        }
        Symbol[a13] = v9;
        f14(a12, F10);
    }
    i2++;
}
