const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
async function f39() {
    const v42 = await WebAssembly.compile(v38);
    const t3 = WebAssembly.Instance;
    const v44 = new t3(v42);
    for (const v45 in v44) {
    }
    return v44;
}
f39();
