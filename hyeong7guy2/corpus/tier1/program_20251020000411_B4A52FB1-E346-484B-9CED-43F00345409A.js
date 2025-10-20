function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = {};
    class C5 {
    }
    for (let i7 = 0;
        (() => {
            const v9 = i7 < 20000;
            [i7];
            return v9;
        })();
        ++i7) {
        v4.p1 = C5;
    }
    Object.defineProperty([a2], 5, { configurable: true, enumerable: true, value: [-1.0,-1e-15,1000000.0,-1000000000.0,0.41956349634434864] });
}
new F0(F0, F0);
new F0();
