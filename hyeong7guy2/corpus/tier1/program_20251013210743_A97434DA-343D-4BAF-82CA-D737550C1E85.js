function f0() {
    const v13 = { done: true };
    const v15 = {};
    const v16 = { a: 1, b: v15 };
    const v56 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,4,4,1,112,0,0,7,22,2,3,116,97,103,4,0,0,8,116,104,114,111,119,95,102,110,0,0,10,6,1]);
    let done = false;
    if (!done) {
        new Array(1048576);
    }
    const v80 = new Uint8Array(96);
    const v82 = WebAssembly.Module;
    let v83;
    try { v83 = new v82(v56); } catch (e) {}
    const v84 = { lib: v83 };
    const v85 = WebAssembly.Module;
    try { v85(v80); } catch (e) {}
}
f0();
