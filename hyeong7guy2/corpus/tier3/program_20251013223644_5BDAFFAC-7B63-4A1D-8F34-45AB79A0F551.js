function f0() {
}
[-1000000.0,0.3712923620181735];
const v3 = [984028607,57522,-65535,-1161695454,-1872874253,256,-14,-128,127];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v3;
}
const v8 = new F4(F4, F4);
const v9 = new F4(v8, v3);
new F4(f0, v9);
const v12 = Symbol.iterator;
const v21 = {
    [v12]() {
        let v14 = 10;
        const v20 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                return { done: v18, value: v14 };
            },
        };
        return v20;
    },
};
const v23 = new WeakMap();
[-256n,v23];
function f25() {
    return v8;
}
new Uint8Array(1073);
const v30 = [2.220446049250313e-16,-1.0,1000000000.0,1000000000000.0];
const v31 = /\p{Changes_When_NFKC_Casefolded}+/imud;
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    const v113 = new Uint8Array([0,97,115,109,1,0,0,0,1,16,4,95,1,95,96,1,108,0,0,96,1,109,0,0,96,1,127,0,3,3,2,1,3,4,4,1,112,0,1,7,8,1,4,109,97,105,110,0,1,9,7,1,0,65,0,11,1,0,10,11,2,2,0,11,7,0,208,0,65,0,17,2,0,11]);
    const wasmCode = v113;
    function poc(a116, a117) {
        try {
            try { a116(a117); } catch (e) {}
        } catch(e119) {
        }
    }
    const v121 = WebAssembly.Module;
    let v122;
    try { v122 = new v121(wasmCode); } catch (e) {}
    const wasmModule = v122;
    const v124 = WebAssembly.Instance;
    let v125;
    try { v125 = new v124(wasmModule); } catch (e) {}
    const wasmInstance = v125;
    wasmInstance?.exports;
    for (let i129 = 0; i129 < 100; i129++) {
    }
}
try { new F33(v31, 127); } catch (e) {}
const v136 = new F33(-11n, v30);
new F33(v30, v136);
class C138 {
    static set g(a140) {
    }
}
for (let i144 = (() => {
        function f142(a143) {
        }
        return 0;
    })();
    i144 < 20000;
    ) {
    ++i144;
}
