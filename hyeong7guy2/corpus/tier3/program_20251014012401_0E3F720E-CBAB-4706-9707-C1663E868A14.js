for (let v0 = 0; v0 < 100; v0++) {
    const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    async function f40() {
        const v43 = await WebAssembly.compile(v39);
        const t4 = WebAssembly.Instance;
        const v45 = new t4(v43);
        for (const v46 in v45) {
        }
    }
    f40();
}
