function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    let v3 = 64;
    v3++;
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i11 = 0;
        (() => {
            ~i11;
            const v14 = i11 < 20000;
            F5[v3] <<= v3;
            return v14;
        })();
        ) {
        i11++;
    }
}
new F0(F0);
