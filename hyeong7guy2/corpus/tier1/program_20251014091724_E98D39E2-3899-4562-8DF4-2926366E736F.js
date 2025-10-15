with (Map) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F1(F1, F1, F1, F1);
    new F1(F1, v7);
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new Float32Array();
    for (let i17 = 0;
        i17 < 20000;
        (() => {
            const v21 = ++i17;
            v21 >>> v21;
        })()) {
        const v24 = {};
        v14.d *= 1.1356230574660949e+308;
    }
}
