with (Map) {
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F2(F2, F2, Map, F2);
    const v9 = [-262943715,129,-1073741824,-50928,14,-16,-13717,-1425909116,11];
    try { v9(); } catch (e) {}
    new F2(F2, v8);
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v17 = new Float32Array();
    v17.d = WeakMap;
    for (let i20 = 0;
        i20 < 20000;
        (() => {
            const v24 = ++i20;
            v24 >>> v24;
        })()) {
        const v27 = {};
        v17.d *= 1.1356230574660949e+308;
    }
}
