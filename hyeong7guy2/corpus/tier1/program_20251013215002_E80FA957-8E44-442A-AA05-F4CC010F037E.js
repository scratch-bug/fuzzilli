function hot_func(a1) {
    let x = {};
    function f4() {
    }
    const inner = f4;
    if (a1) {
        eval("let x = 2;");
    }
}
class C9 {
}
new C9();
[633485049,-1024,-1,-4733,-1073741824,-5,-2147483647,633588304];
Symbol.iterator;
class C15 {
}
new C15();
try { BigUint64Array.delete(); } catch (e) {}
const v27 = 0 / 0;
const v56 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const wasm_code = v56;
const t21 = WebAssembly.Module;
const v60 = new t21(wasm_code);
function f61() {
    return 7;
}
const v62 = { f: f61 };
const v64 = {
    next() {
    },
    m: v62,
};
const v65 = WebAssembly.Instance;
const v66 = {};
const v67 = {};
const t35 = {};
t35.b = v27;
const v69 = new v65(v60, v64);
const instance = v69;
instance.exports;
for (let i73 = 0;
    (() => {
        function f74(a75, a76) {
        }
        return i73 < 20000;
    })();
    i73++) {
}
const v82 = {};
for (let i84 = 0; i84 < 100; i84++) {
    hot_func(false);
}
hot_func(true);
const v94 = class {
    static #valueOf(a96) {
        this.toString = a96;
    }
}
const v100 = Symbol.iterator;
const v104 = {
    [v100]() {
        return {};
    },
};
function F105(a107, a108) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v104;
    this.a = v94;
    this.h = a108;
}
const v109 = new F105(-1000000000.0, F105);
new F105(-1000000000.0, v109);
new Uint32Array(1243);
class C115 {
}
const v117 = {
    get a() {
    },
};
function f118(a119, a120) {
    a119.a = a120;
    return 0.7352659747889693;
}
for (let v121 = 0; v121 < 250; v121++) {
    const v122 = {};
    v122.a = C115;
    const v125 = v121 % 2 ? v122 : v117;
    Object.defineProperty(v125, "a", { value: 0.7352659747889693 });
    Symbol.toPrimitive;
    const v128 = {};
    f118(v125);
    let v130 = f118.bind();
}
