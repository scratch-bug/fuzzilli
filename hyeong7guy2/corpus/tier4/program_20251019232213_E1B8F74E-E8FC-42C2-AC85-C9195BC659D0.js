async function f1() {
    let v15 = 100;
    v15--;
    const v28 = new Uint8Array([0,97,115,109,1,0,0,0,1,14,2,95,1,v15,113,0,96,1,111,1,127,3,2,1]);
    try {
        await WebAssembly.instantiate(v28);
    } catch(e32) {
    }
    return Uint8Array;
}
f1();
