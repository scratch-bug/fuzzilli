const v0 = class {
}
class C1 extends v0 {
}
const v12 = {
    [Symbol]() {
        const v11 = {
            next() {
                class C5 {
                    static [C1](a7, a8, a9, a10) {
                    }
                    536870889 = this;
                }
                return C1;
            },
        };
    },
};
try { Intl.formatRangeToParts(Symbol, Intl, Intl, Intl, C1); } catch (e) {}
function f15(a16, a17, a18) {
    +-3;
    "" - "";
    const v59 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t23 = WebAssembly.Module;
    const v62 = new t23(v59);
    function f63() {
        return Intl;
    }
    const v64 = { f: f63 };
    const v65 = { m: v64 };
    const t30 = WebAssembly.Instance;
    const v67 = new t30(v62, v65);
    const v69 = v67.exports.main;
    for (let i71 = 0; v69(), i71 < 20000; i71++) {
    }
    /(fp*)/vi;
    return 1;
}
class C81 {
}
C81.g = C81;
const v84 = new Worker(f15, { type: "function" });
v84.getMessage();
