class C0 {
}
const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
async function f40() {
    const v43 = await WebAssembly.compile(v39);
    let v44 = 127;
    const t6 = WebAssembly.Instance;
    new t6(v43);
    for (let i48 = 0;
        i48 < 25000;
        (() => {
            ++i48;
            const v54 = --v44;
            --v44;
            Math.pow(v44);
            Math.cosh(v54);
            v44++;
        })()) {
    }
}
f40();
