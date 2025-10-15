function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = this;
    this.g = -256;
}
const v3 = new F1();
new F1();
const v6 = ([500148162,1073741825,43562,536870912,268435456,35081,1040482820,62024]).constructor;
const v7 = class extends v6 {
    static [v6](a9, a10, a11) {
    }
}
new v7();
class C14 {
    static #m(a16, a17, a18, a19) {
        const v20 = {};
        const t16 = {};
        t16.g = a18;
        const t18 = {};
        t18.a = -256;
        return -65537n;
    }
}
new C14();
const v24 = new C14();
C14[Symbol.toStringTag] = F1;
new C14();
class C28 extends F1 {
    static get a() {
        const v30 = {};
        Proxy(this);
        return v24;
    }
}
new C28();
const v34 = new C28();
class C35 extends F1 {
    static [C14](a37, a38, a39, a40) {
        if (v3 < a39) {
        }
        return v34;
    }
}
new C35();
class C46 {
    valueOf(a48, a49) {
        super.c |= 4294967295;
        return -256;
    }
}
const v51 = class {
}
function F67(a69) {
    if (!new.target) { throw 'must be called with new'; }
}
class C70 extends F67 {
}
Object.create({});
for (let i77 = 0; i77 < 20000;) {
    ++i77;
}
C70 instanceof Object;
new BigUint64Array(1073741825);
C28 *= C70;
const v94 = Symbol.iterator;
const v98 = {
    [v94]() {
        return {};
    },
};
const v114 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t71 = WebAssembly.Module;
const v117 = new t71(v114);
function f118() {
    return 109;
}
const v119 = { f: f118 };
const v120 = { m: v119 };
const t78 = WebAssembly.Instance;
const v122 = new t78(v117, v120);
const v124 = v122.exports.main;
for (let v125 = 0; v125 < 100; v125++) {
    const t82 = {};
    t82.defineProperty = Symbol;
    v125 < 20000;
    v124();
    v125++;
}
new v51();
const t89 = {};
t89.defineProperty = Symbol;
