function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return 0.921889653063343;
    }
    Object.defineProperty(a3, "valueOf", { configurable: true, value: f5 });
    function f6(a7, a8, a9) {
        const v11 = [-28740];
        class C12 {
        }
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            const v20 = a19.constructor;
            try { v20(a8); } catch (e) {}
        }
        new F14(v11, -1, C12, -9007199254740992n);
        return v11;
    }
    f6(f6, a3);
}
new F1(F1);
