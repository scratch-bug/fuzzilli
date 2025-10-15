with (Map) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F1();
    const v8 = [-262943715,129,-1073741824,-50928,14,-16,-13717,-1425909116,11];
    try { v8(Map, Map); } catch (e) {}
    new F1(F1, v7);
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v16 = new Float32Array();
    for (let i19 = 0;
        i19 < 20000;
        (() => {
            const v23 = ++i19;
            v23 >>> v23;
        })()) {
        const v26 = {};
        v16.d *= 1.1356230574660949e+308;
    }
}
