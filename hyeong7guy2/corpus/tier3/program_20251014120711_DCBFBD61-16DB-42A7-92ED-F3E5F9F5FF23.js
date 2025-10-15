function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6) {
        return this;
    }
    a2[Symbol.toPrimitive] = f4;
    function f9(a10, a11, a12) {
        const v14 = [-28740];
        class C15 {
        }
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            const v23 = a22.constructor;
            try { v23(a11); } catch (e) {}
        }
        new F17(v14, -1, C15, -9007199254740991n);
        return a12;
    }
    f9(f9, a2);
}
new F0(F0);
