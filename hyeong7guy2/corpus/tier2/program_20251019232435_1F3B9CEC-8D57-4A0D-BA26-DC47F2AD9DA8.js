const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v55 = /aK\1111(?:a+)*/dsg;
for (let i57 = 129;
    (() => {
        const v59 = i57 < 20000;
        v55.test();
        return v59;
    })();
    ++i57) {
}
const v90 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f91() {
    const v94 = await WebAssembly.compile(v38);
    const v96 = await WebAssembly.compile(v90);
    const t14 = WebAssembly.Instance;
    const v98 = new t14(v94);
    const v99 = WebAssembly.Instance;
    const v101 = v98.exports.exp;
    const v102 = { imp: v101 };
    const v104 = new v99(v96, { env: v102 });
    v104.exports.re_exp;
}
f91();
