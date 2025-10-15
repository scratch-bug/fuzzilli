async function f0() {
    const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,14,2,95,1,100,113,0,96,1,111,1,127,3,2,1,1,7,7,1,4,109]);
    try {
        await WebAssembly.instantiate(v35);
    } catch(e39) {
    }
    return 14;
}
f0();
