const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
async function f39() {
    const v41 = WebAssembly.compile(v38);
    const v42 = await v41;
    const t4 = WebAssembly.Instance;
    new t4(v42);
    const v45 = {};
    const v46 = {};
    for (let i48 = 2.2250738585072014e-308;
        (() => {
            const v50 = i48 < 20000;
            const v54 = {
                toString(a52, a53) {
                    return 0;
                },
            };
            return v50;
        })();
        i48++) {
    }
    return v41;
}
f39();
