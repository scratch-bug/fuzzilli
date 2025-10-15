const v2 = new Uint32Array();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this?.constructor;
    try { new v7(a5, v2); } catch (e) {}
}
const v9 = new F3();
const v10 = new F3();
new F3(v10, v9);
class C12 extends Uint32Array {
}
const v17 = class {
    static {
    }
}
new Float64Array(1255);
try { Uint8Array.values(); } catch (e) {}
function f23(a24) {
}
4 >> 4;
7 * 7;
1 >> 1;
0 >> 0;
0 + 0;
const v65 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const wasm_code = v65;
WebAssembly.JSTag = WebAssembly;
const v68 = WebAssembly.Module;
try { v68.imports("object"); } catch (e) {}
const v70 = new v68(wasm_code);
function f71() {
    return 2;
}
try { f71(); } catch (e) {}
const v73 = { f: f71 };
v73.f();
for (const v76 in Uint8Array) {
    for (let [v77,v78,v79] of 256) {
    }
}
const v80 = { m: v73 };
const t41 = WebAssembly.Instance;
const v82 = new t41(v70, v80);
const v83 = v82.constructor;
try { new v83(0); } catch (e) {}
const instance = v82;
instance.exports.main.length;
for (let i90 = 0;
    (() => {
        const v92 = i90 < 20000;
        v92 && v92;
        return v92;
    })();
    i90++) {
}
const t55 = {};
t55.defineProperty = Symbol;
function f100() {
}
Symbol.for(Symbol);
f100[Symbol] = f71;
gc({ execution: "async", type: "minor" });
Proxy.prototype = Proxy;
