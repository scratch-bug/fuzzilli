function f0() {
    function F1(a3) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C4 {
    }
    C4.d = F1;
    for (let i7 = 0;
        i7 < 20000;
        (() => {
            const v11 = ++i7;
            v11 >>> v11;
        })()) {
        C4.d *= 1.1356230574660949e+308;
    }
    return f0;
}
({ construct: f0 }).construct();
