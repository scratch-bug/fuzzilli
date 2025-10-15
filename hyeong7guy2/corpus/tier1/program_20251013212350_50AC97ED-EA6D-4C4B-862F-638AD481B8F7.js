const v2 = new Uint32Array(128);
const v3 = [Uint32Array,v2];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this?.constructor;
    try { new v8(a6, v2); } catch (e) {}
    this.b = a7;
    this.g = v3;
    this.h = 128;
}
Uint32Array.h = Uint32Array;
const v10 = new F4(v3, Uint32Array);
new F4(v10, Uint32Array);
class C12 extends Uint32Array {
    static o(a14, a15, a16) {
        Uint32Array[12];
        return a14;
    }
    static [F4] = 128;
}
try { C12.of(); } catch (e) {}
new C12();
new C12();
try { ("round").localeCompare(F4); } catch (e) {}
new Uint8Array(256);
-238.16706486014903 | -238.16706486014903;
const v30 = class {
    static {
    }
}
const v34 = new Float64Array(1255);
try { v34.values(); } catch (e) {}
function f36(a37) {
    a37();
    return a37;
}
0 !== 0;
4 >> 4;
7 * 7;
1 >> 1;
0 >> 0;
0 + 0;
-7;
4 >>> 4;
-110;
const v83 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const wasm_code = v83;
WebAssembly.JSTag = WebAssembly;
const v86 = WebAssembly.Module;
try { v86.imports("object"); } catch (e) {}
const v88 = new v86(wasm_code);
function f89() {
    return 2;
}
try { f89(); } catch (e) {}
const v91 = { f: f89 };
try { v91.f(); } catch (e) {}
const v93 = { m: v91 };
const t58 = WebAssembly.Instance;
const v95 = new t58(v88, v93);
const v96 = v95?.constructor;
try { new v96(0); } catch (e) {}
const instance = v95;
instance.exports.main.length;
for (let i103 = 0;
    (() => {
        const v105 = i103 < 20000;
        v105 && v105;
        return v105;
    })();
    i103++) {
}
const v111 = {};
v111.defineProperty = Symbol;
function f113() {
}
const v115 = Symbol.toPrimitive;
Symbol.for(v115.description);
f113[v115] = f89;
const v119 = new Proxy(f113, v111);
Symbol.e = Symbol;
v119[Symbol.toPrimitive] = f36;
v119.prototype = v119;
