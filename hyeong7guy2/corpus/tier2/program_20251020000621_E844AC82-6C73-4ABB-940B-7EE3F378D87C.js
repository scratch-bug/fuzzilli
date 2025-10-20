try {
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t5 = WebAssembly.Module;
    const v50 = new t5(v47);
    function f51() {
    }
    const v52 = { f: f51 };
    const v53 = { m: v52 };
    const t11 = WebAssembly.Instance;
    const v55 = new t11(v50, v53);
    v55.main;
    for (let i58 = 0; i58; i58++) {
    }
    function F64(a66, a67) {
        if (!new.target) { throw 'must be called with new'; }
        const v69 = globalThis.console;
        v69.profileEnd();
        Temporal ?? Temporal;
        v69.profile();
    }
    new F64();
} catch(e75) {
}
