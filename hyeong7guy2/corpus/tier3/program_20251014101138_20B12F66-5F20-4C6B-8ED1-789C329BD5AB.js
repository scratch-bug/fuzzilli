function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [-28740];
    class C6 {
    }
    function F8(a10, a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        const v14 = a13.constructor;
        try { v14.asUintN(C6, C6); } catch (e) {}
    }
    new F8(v5, -1, C6, -9007199254740992n);
}
new F0();
