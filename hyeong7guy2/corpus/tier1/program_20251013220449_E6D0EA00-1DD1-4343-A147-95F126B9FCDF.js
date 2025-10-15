function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t3 = WebAssembly.Module;
    const v43 = new t3(v40);
    function f44() {
        return 2;
    }
    const v45 = { f: f44 };
    const v46 = { m: v45 };
    const t10 = WebAssembly.Instance;
    const v48 = new t10(v43, v46);
    const v50 = v48.exports.main;
    for (let i52 = 0;
        (() => {
            const t0 = {};
            t0.defineProperty = Symbol;
            return i52 < 20000;
        })();
        i52++) {
        v50();
    }
}
new F1();
new F1();
