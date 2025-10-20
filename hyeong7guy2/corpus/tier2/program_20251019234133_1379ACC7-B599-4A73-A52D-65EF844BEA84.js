try {
    class C0 {
    }
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            function f6(a7) {
                new BigUint64Array(1073741825);
                const v46 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
                const t9 = WebAssembly.Module;
                const v49 = new t9(v46);
                function f50() {
                    return 1;
                }
                const v51 = { f: f50 };
                const v52 = { m: v51 };
                const t16 = WebAssembly.Instance;
                const v54 = new t16(v49, v52);
                const t18 = v54.exports.main;
                t18(v52);
                return 0;
            }
            return f6;
        }
        Object.defineProperty(this, "toString", { get: f5 });
    }
    const v58 = new F1(F1);
    v58.toString();
} catch(e60) {
}
