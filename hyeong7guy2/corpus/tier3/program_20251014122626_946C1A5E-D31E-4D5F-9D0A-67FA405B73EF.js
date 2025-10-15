function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [-28740];
    class C6 {
    }
    function f7(a8) {
        return v5;
    }
    C6[Symbol.toPrimitive] = f7;
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        const v18 = a17.constructor;
        try { v18.asUintN(C6); } catch (e) {}
    }
    new F12(v5, -1, C6, -9007199254740992n);
}
new F0();
