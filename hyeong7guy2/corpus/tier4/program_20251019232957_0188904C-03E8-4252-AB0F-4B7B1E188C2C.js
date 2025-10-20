try {
    function F0(a2) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C3 extends F0 {
    }
    C3.e = C3;
    class C4 {
    }
    try { C4.apply(); } catch (e) {}
    for (let v6 = 0; v6 < 25; v6++) {
        !v6;
    }
    class C8 {
    }
    for (let i10 = 0;
        (() => {
            const v12 = i10 < 20000;
            for (let v13 = 0; v13 < 5; v13++) {
            }
            return v12;
        })();
        ++i10) {
        i10 - i10;
    }
} catch(e18) {
}
