function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v41 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const v45 = new Proxy(Object, {});
    const t4 = WebAssembly.Module;
    const v48 = new t4(v41);
    const v49 = { f: v45 };
    const v50 = { m: v49 };
    const t8 = WebAssembly.Instance;
    new t8(v48, v50);
}
new F1();
