function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        return a4;
    }
    gc();
    const v51 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,13,1,7,105,109,112,111,114,116,115,1,102,0,0,7,9,1,5,114,101,101,120,112,0,0]);
    const t7 = WebAssembly.Module;
    const v54 = new t7(v51);
    const v55 = WebAssembly.Instance;
    const v56 = { f: f6 };
    new v55(v54, { imports: v56 });
}
new F0();
new F0();
