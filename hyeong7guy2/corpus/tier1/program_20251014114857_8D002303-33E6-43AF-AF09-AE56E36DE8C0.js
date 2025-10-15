const v0 = class {
}
with (Map) {
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F3(Map, F3, Map, F3);
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v15 = new Float32Array();
    v15.d = v0;
    for (let i17 = 512; i17 < 20000; ++i17) {
        const v23 = {};
        v9.d *= 1.1356230574660949e+308;
    }
}
