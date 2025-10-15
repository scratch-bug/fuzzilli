const v0 = [];
const v3 = class {
    get f() {
        try {
        const t0 = -1582148000;
        new t0(v0, this, -1, this);
        } catch (e) {}
        return this;
    }
}
new v3();
[];
const v46 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v88 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f89() {
    const v92 = await WebAssembly.compile(v46);
    for (let i95 = 0; i95 < 20000; ++i95) {
        [1,2,3,4,5,6,7,6,9,10,-9007199254740990,12,13,14,15,-24934];
    }
    const v125 = await WebAssembly.compile(v88);
    const t19 = WebAssembly.Instance;
    const v127 = new t19(v92);
    const v128 = WebAssembly.Instance;
    const v130 = v127.exports.exp;
    const v131 = { imp: v130 };
    const v133 = new v128(v125, { env: v131 });
    const t26 = WebAssembly.promising(v133.exports.re_exp);
    t26();
}
f89();
