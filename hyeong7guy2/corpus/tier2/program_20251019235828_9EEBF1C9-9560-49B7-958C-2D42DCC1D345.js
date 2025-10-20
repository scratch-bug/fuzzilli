const v0 = [];
function f1() {
    return v0;
}
function f3(a4) {
    return a4;
}
for (let v5 = 0; v5 < 5; v5++) {
    const t8 = "zRGm";
    t8[Symbol] = f3;
    const v8 = {
        [Symbol]() {
        },
    };
}
for (let v9 = 0; v9 < 5; v9++) {
}
const v45 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t18 = WebAssembly.Module;
const v48 = new t18(v45);
function f49() {
    return f49;
}
const v50 = { f: f49 };
const v51 = { m: v50 };
const t25 = WebAssembly.Instance;
const v53 = new t25(v48, v51);
const v55 = v53.exports.main;
for (let i57 = 0;
    i57 < 20000;
    (() => {
        const v66 = {
            construct(a62, a63) {
                eval();
                return WebAssembly;
            },
        };
        i57++;
    })()) {
    let v69 = undefined;
    v55();
    v69 -= v69;
    new f1();
}
