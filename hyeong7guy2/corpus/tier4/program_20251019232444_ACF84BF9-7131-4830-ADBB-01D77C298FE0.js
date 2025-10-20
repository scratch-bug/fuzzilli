async function f0() {
    let v16 = 113;
    v16--;
    v16--;
    const v29 = new Uint8Array([0,97,115,109,1,0,0,0,1,14,2,95,1,100,v16,0,96,1,111,1,127,3,2,1]);
    try {
        await WebAssembly.instantiate(v29);
    } catch(e33) {
    }
    return f0;
}
f0();
