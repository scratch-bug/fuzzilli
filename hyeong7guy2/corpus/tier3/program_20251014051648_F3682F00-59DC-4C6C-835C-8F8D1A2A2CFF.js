function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i10 = 0;
        (() => {
            ~i10;
            const v13 = i10 < 20000;
            F4[64] <<= 64;
            return v13;
        })();
        i10++) {
    }
}
new F0();
