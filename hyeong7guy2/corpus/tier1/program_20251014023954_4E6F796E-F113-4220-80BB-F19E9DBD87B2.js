const v0 = [127,-1073741824];
new Uint8Array(4);
[268435439,-65535,9223372036854775807,-15,65536,10000];
const v5 = [-2.220446049250313e-16,-0.0,-Infinity,0.6281938377126124,NaN,590056.8043175598,0.5793048729992061,-27.094167563616452,4.561131720144523,152745.7925150944];
let v18 = 0;
for (let i = 0; i < 50; i++) {
    const v19 = `
        function* f20(a21, a22, a23) {
        }
        try {
        } catch(e24) {
        }
        for (let v25 = 0; v25 < 100; v25++) {
        }
        try { f20(v0, v5); } catch (e) {}
    `;
    eval();
    v18++;
    v18 < 8;
}
const v55 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
const v56 = new Uint8Array(v55);
const t22 = WebAssembly.Module;
const v59 = new t22(v56);
function f60() {
}
const v61 = { f: f60 };
const v62 = { m: v61 };
const t28 = WebAssembly.Instance;
const v64 = new t28(v59, v62);
const v65 = v64.exports;
v64.toString = "valueOf";
v55.length = 1;
const v67 = v65.main;
for (let i70 = (() => {
        f60();
        return 0;
    })();
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i70;
    })();
    i70++) {
    v67();
}
function f78(a79) {
    return 109;
}
class C80 extends f78 {
}
