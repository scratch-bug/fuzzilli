class C3 {
    set e(a5) {
    }
    set h(a7) {
    }
    static set g(a9) {
    }
}
const v10 = new C3();
const v11 = new C3();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
    this.d = a14;
    this.b = "e";
}
const v16 = new F12("e", "e");
const v17 = new F12(F12, v11);
new F12(v10, "e");
new F12(1e-15, v10);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v11;
}
new F20(F12, v17);
new F20(F20, v16);
new BigUint64Array(1073741825);
const v29 = class {
}
new v29();
new v29();
const v67 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t32 = WebAssembly.Module;
const v70 = new t32(v67);
function f71() {
}
function f73() {
    return 1;
}
const v74 = { f: f73 };
const v75 = { m: v74 };
const t41 = WebAssembly.Instance;
new t41(v70, v75);
for (let i81 = (() => {
        function f79(a80) {
        }
        return 0;
    })();
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i81 < 20000;
    })();
    i81++) {
}
[4096];
