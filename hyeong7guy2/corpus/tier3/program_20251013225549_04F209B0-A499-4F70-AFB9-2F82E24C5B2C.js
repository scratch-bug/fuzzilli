const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
async function f39() {
    const v41 = WebAssembly.compile(v38);
    const v42 = await v41;
    const t4 = WebAssembly.Instance;
    new t4(v42);
    class C45 {
    }
    const v46 = {};
    const v47 = {};
    for (let i49 = 0;
        i49 < 20000;
        (() => {
            const v53 = i49++;
            v53 >> v53;
        })()) {
    }
    for (let v56 = 0; v56 < 250; v56++) {
    }
    const v57 = {};
    return v41;
}
f39();
