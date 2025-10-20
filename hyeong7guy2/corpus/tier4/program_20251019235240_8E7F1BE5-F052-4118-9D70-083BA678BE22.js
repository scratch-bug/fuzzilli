function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0;
        (() => {
            const v6 = i4 < 20000;
            v6 || v6;
            return v6;
        })();
        i4++) {
    }
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        const v16 = globalThis.console;
        v16.profileEnd(a2, a2, v16, F11, this);
        v16.profile();
    }
    new F11(F0, a2);
}
new F0();
new F0();
