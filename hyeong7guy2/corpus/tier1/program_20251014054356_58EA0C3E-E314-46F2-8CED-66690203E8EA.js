class C1 {
    [Date](a3, a4) {
        try { new Date(); } catch (e) {}
    }
    constructor(a7, a8) {
    }
}
new C1(Date, Date);
new Map();
function f16(a17, a18, a19) {
    let v20 = 0;
    if (a19) {
        v20 = 4294967296;
    }
    for (let i23 = 0; i23 < 1; i23++) {
        v20 & 4294967295;
    }
}
for (let i32 = 0; i32 < 20000; i32++) {
    f16([], []);
}
f16(1.1, [1.1,1.1,1.1,1.1], true);
const v85 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const wasm_code = v85;
const v88 = WebAssembly.Module;
const v89 = new v88(wasm_code);
function f90() {
    return 2;
}
const v91 = { f: f90 };
const v92 = { m: v91 };
function f93(a94) {
    const v95 = { ...v88 };
}
function f97(a98) {
}
const instance = v89;
for (let i101 = 0; i101 < 20000; i101++) {
}
