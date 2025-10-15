const v1 = class {
    static {
    }
    get a() {
        return -27507;
    }
}
const v4 = new v1();
[v1,v4];
const v7 = new WeakMap();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this?.__lookupSetter__;
    try { new v13(this); } catch (e) {}
    this.b = a11;
}
const v15 = new F8(v7, v7, v1);
const v16 = new F8(v15, F8, WeakMap);
new F8(F8, v16, v16);
try { new Float32Array(Float32Array, Float32Array, v7); } catch (e) {}
const v21 = class {
}
try { v21(); } catch (e) {}
function f23(a24) {
    return 4294967297n;
}
const v27 = new ArrayBuffer(182);
v27.transferToFixedLength();
try { f23(WeakMap); } catch (e) {}
const v31 = Symbol.toPrimitive;
Symbol.for(v31.description);
v21[v31] = f23;
class C35 {
}
try { new C35(); } catch (e) {}
Object.defineProperty(C35, "constructor", { value: gc });
function F38(a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    try { a40.constructor(); } catch (e) {}
    const v44 = a40.constructor;
    new v44(F38, v44);
}
new F38(C35);
for (let v47 = 0; v47 < 100; v47++) {
    v47 & v47;
    const v50 = class {
        static [v21] = WebAssembly;
    }
    v50[4294967297] = v50;
}
