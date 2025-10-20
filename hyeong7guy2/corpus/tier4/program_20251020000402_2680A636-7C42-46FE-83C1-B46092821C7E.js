function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = WebAssembly.compile();
    function f7() {
        return f7;
    }
    let v16 = 13;
    v16++;
    const v19 = new Uint8Array([9007199254740992,97,115,109,1,0,0,0,v16,9007199254740992]);
    const v20 = WebAssembly.Module;
    try { new v20(v19); } catch (e) {}
    v6.catch(f7);
}
new F1(F1, F1);
