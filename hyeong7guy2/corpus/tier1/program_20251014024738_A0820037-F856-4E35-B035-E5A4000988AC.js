class C0 {
}
const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t3 = WebAssembly.Module;
const v39 = new t3(v36);
function f40() {
}
const v41 = { f: f40 };
const v42 = { m: v41 };
const t9 = WebAssembly.Instance;
const v44 = new t9(v39, v42);
const v45 = v44.exports;
const v46 = v45.main;
for (let i48 = 0;
    i48 < 20000;
    (() => {
        const v55 = {
            construct(a53, a54) {
                return v45;
            },
        };
        i48++;
    })()) {
    let v58 = undefined;
    v46();
    v58 -= v58;
}
class C60 extends C0 {
    set c(a62) {
    }
}
