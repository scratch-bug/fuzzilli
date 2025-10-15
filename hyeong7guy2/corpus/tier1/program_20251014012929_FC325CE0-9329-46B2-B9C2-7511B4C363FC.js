const v0 = [];
function f1() {
    return v0;
}
function f2(a3) {
    a3(a3, a3);
}
const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t8 = WebAssembly.Module;
const v43 = new t8(v40);
function f44() {
    return 1;
}
const v45 = { f: f44 };
const v46 = { m: v45 };
const t15 = WebAssembly.Instance;
const v48 = new t15(v43, v46);
const v50 = v48.exports.main;
for (let i52 = 0;
    i52 < 20000;
    (() => {
        const v59 = {
            construct(a57, a58) {
                return f2;
            },
        };
        i52++;
    })()) {
    let v62 = f2(v50);
    v62 -= v62;
    new f1();
}
