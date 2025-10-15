function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 268435439;
    this.g = 268435439;
}
const v3 = new F0();
const v4 = new F0();
const v6 = new Map();
const v7 = class {
    static {
        try { new Map(...v4, Map, v3, v3, this); } catch (e) {}
    }
    static toString(a11, a12) {
        return this;
    }
}
const v13 = new v7();
new v7();
function f15() {
    return F0;
}
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v13;
}
new F16(v4, v6, Map);
new F16(v13, Map, v7);
class C25 extends Int16Array {
}
gc();
const v52 = %WasmStruct();
const v68 = {};
for (let i70 = 0;
    (() => {
        const v71 = [];
        v71[1] = v71;
        return i70 < 20000;
    })();
    ++i70) {
}
const v85 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t41 = WebAssembly.Module;
const v88 = new t41(v85);
function f89() {
}
const v90 = { f: f89 };
const v91 = { m: v90 };
const t47 = WebAssembly.Instance;
new t47(v88, v91);
let v99 = 94;
v99--;
const v110 = new Uint8Array([0,97,115,109,1,0,0,0,1,15,4,95,0,94,108,0,v99,107,0,96,1,107,2,1,127]);
const v112 = WebAssembly.Memory;
try { new v112(C25); } catch (e) {}
const v114 = WebAssembly.Module;
try { new v114(v110); } catch (e) {}
