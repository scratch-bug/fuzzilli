const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
async function f39() {
    const v41 = WebAssembly.compile(v38);
    const v42 = await v41;
    let v43 = 127;
    const v44 = await v41;
    const t5 = WebAssembly.Instance;
    new t5(v42);
    const v47 = {};
    for (let v48 = 0; v48 < 5; v48++) {
    }
    for (let i50 = 0;
        i50 < 25000;
        (() => {
            ++i50;
            v43++;
            function f56(a57) {
                return 0;
            }
        })()) {
        const v59 = {};
        for (let v60 = 0; v60 < 5; v60++) {
        }
    }
    const v61 = {};
    return v44;
}
f39();
