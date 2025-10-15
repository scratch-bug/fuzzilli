const v0 = [];
function f1() {
    return v0;
}
("58584").normalize("NFKC");
new Array(6);
new Int8Array(10);
class C13 {
    static [Int8Array] = 6;
    valueOf(a15, a16) {
        const v17 = {
            apply: Array,
            call: f1,
            defineProperty: Array,
            get: Array,
            getPrototypeOf: f1,
            isExtensible: Array,
            ownKeys: f1,
            set: f1,
            setPrototypeOf: Array,
        };
        const v19 = new Proxy(v0, v17);
        return v19;
    }
    3424188886 = Int8Array;
    static g = Int8Array;
    #h = "58584";
    [6];
}
new C13();
const v21 = new C13();
const v22 = new C13();
const v23 = class {
    get d() {
    }
}
function f25(a26) {
    a26();
}
const v63 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t40 = WebAssembly.Module;
const v66 = new t40(v63);
const v72 = {
    set a(a70) {
        v21.d <<= 0;
    },
    b: v22,
    get e() {
        return this;
    },
    execution: "async",
};
gc(v72);
function f74() {
    return 109;
}
const v75 = { f: f74 };
const v76 = { m: v75 };
const t58 = WebAssembly.Instance;
const v78 = new t58(v66, v76);
const v80 = v78.exports.main;
for (let i82 = 0;
    (() => {
        const t0 = {};
        t0.defineProperty = Symbol;
        return i82 < 20000;
    })();
    (() => {
        const v101 = {
            construct(a89, a90) {
                const v92 = a90[0];
                super[v92];
                function f94(a95) {
                    return 97;
                }
                const v96 = class extends f94 {
                    set c(a98) {
                    }
                }
                v92[0] = 1.1;
                return Reflect.construct();
            },
        };
        i82++;
    })()) {
    f25(v80);
}
