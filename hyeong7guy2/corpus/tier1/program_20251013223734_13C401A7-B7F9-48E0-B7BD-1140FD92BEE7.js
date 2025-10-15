const v2 = new Array(3979);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 3979;
    this.c = a10;
    this.e = a11;
}
const v12 = new F6(false, v2, Array, Array);
const v13 = new F6(v12, F6, -16n, 3979);
new F6(v13, v12, 128, v13);
const v17 = class {
    get d() {
    }
}
function f19(a20) {
    a20();
}
const v57 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t18 = WebAssembly.Module;
const v60 = new t18(v57);
const v63 = { execution: "async" };
function f64() {
    return v13;
}
Object.defineProperty(v63, "type", { configurable: true, enumerable: true, get: f64 });
gc(v63);
function f66() {
    return 109;
}
const v67 = { f: f66 };
const v68 = { m: v67 };
const t31 = WebAssembly.Instance;
const v70 = new t31(v60, v68);
const v72 = v70.exports.main;
for (let i74 = 0;
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i74 < 20000;
    })();
    (() => {
        const v87 = {
            construct(a81, a82) {
                const t0 = a82[0];
                t0[0] = 1.1;
                return Reflect.construct();
            },
        };
        i74++;
    })()) {
    f19(v72);
}
