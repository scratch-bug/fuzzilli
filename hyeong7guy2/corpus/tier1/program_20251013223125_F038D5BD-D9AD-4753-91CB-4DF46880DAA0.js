const v0 = class {
    get d() {
    }
}
function f2(a3) {
    a3();
}
const v40 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t8 = WebAssembly.Module;
const v43 = new t8(v40);
gc({ execution: "async" });
function f48() {
    return 109;
}
const v49 = { f: f48 };
const v50 = { m: v49 };
const t16 = WebAssembly.Instance;
const v52 = new t16(v43, v50);
const v54 = v52.exports.main;
for (let i56 = 0;
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i56 < 20000;
    })();
    (() => {
        const v69 = {
            construct(a63, a64) {
                const t0 = a64[0];
                t0[0] = 1.1;
                return Reflect.construct();
            },
        };
        i56++;
    })()) {
    f2(v54);
}
