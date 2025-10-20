function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            new BigUint64Array(1073741825);
            const v45 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t6 = WebAssembly.Module;
            const v48 = new t6(v45);
            function f49() {
                return f5;
            }
            const v50 = { f: f49 };
            const v51 = { m: v50 };
            const t13 = WebAssembly.Instance;
            const v53 = new t13(v48, v51);
            const t15 = v53.exports.main;
            t15();
            return F0;
        }
        f5(f4);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v58 = new F0();
v58.toString();
