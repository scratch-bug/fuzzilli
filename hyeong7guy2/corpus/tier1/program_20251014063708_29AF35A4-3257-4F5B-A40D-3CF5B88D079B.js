class C0 {
    static set d(a2) {
    }
    n(a4, a5, a6) {
    }
}
const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t7 = WebAssembly.Module;
const v46 = new t7(v43);
function f47() {
    return f47;
}
const v48 = { f: f47 };
const v49 = { m: v48 };
const t14 = WebAssembly.Instance;
const v51 = new t14(v46, v49);
const v53 = v51.exports.main;
for (let i55 = 0; i55 < 20000; i55++) {
    for (let v61 = 0; v61 < 5; v61++) {
        let v62 = Symbol.bind();
    }
    v53();
}
