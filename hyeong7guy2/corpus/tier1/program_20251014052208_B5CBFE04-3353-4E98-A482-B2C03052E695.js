const v3 = class {
    static get c() {
        const v5 = %WasmArray();
        return 1000000000000.0;
    }
    static #d = -39869;
}
const v6 = new v3();
const v7 = new v3();
const v8 = new v3();
[-749715554,v8,v7,v6,v8];
const v12 = class extends v3 {
    valueOf(a14, a15, a16, a17) {
        try {
            new v3();
        } catch(e19) {
        }
        return a17;
    }
}
new v12();
[1000.0];
new WeakSet();
const v24 = [-4294967297,1073741824,7,9007199254740992];
const v25 = [-1e-15,2.220446049250313e-16,NaN,3.0,-3.8513673514695594e+307,NaN,0.6495412879052547,3.0];
const v27 = [1.7976931348623157e+308,-1000000.0,-8.079084485476342,-1000000.0,3.0];
const v29 = [8,16,268435441,-1191931371,256,42902983,1073741823];
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v29;
    this.h = F30;
    this.h = a32;
}
new F30(v25, v27);
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    function f41(a42) {
        -11n << -11n;
        return 1000000.0;
    }
    this.toString = f41;
    this.g = a38;
    this.g = v27;
}
new F35(v29, v29, v29, v24);
const v46 = new F35(v25, v27, v25, v29);
const v47 = new F35(v27, v29, v46, v29);
new F35(v25, v27, v27, v27);
function F49(a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
}
const v53 = new F49();
v53.length = v47;
gc();
const v65 = new Uint8Array(1735);
v65.indexOf(3);
const v95 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
v95.parameters = 102;
v95.parameters = v53;
const v96 = new Uint8Array(v95);
const v98 = WebAssembly.Tag;
try { new v98(v95); } catch (e) {}
const v100 = [];
for (let v101 = 0; v101 < 32; v101++) {
    v100["p" + v101] = v101;
}
const v104 = WebAssembly.Module;
try { v104(); } catch (e) {}
const v106 = new v104(v96);
function f107() {
}
const v108 = { f: f107 };
const v109 = { m: v108 };
const t73 = WebAssembly.Instance;
const v111 = new t73(v106, v109);
v111.exports.main;
