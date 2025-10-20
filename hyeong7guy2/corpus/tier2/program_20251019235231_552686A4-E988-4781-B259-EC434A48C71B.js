function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = this;
    this.c = this;
    this.b = this;
}
const v3 = new F1();
new F1();
const v5 = new F1();
v5.b = v5;
[v5,v3];
[36870,16526,2020631761,-4294967295];
248 >>> 248;
class C11 {
    static m(a13, a14, a15, a16) {
    }
}
const v17 = new C11();
new C11();
const v19 = new C11();
v19.isPrototypeOf(v17);
const v21 = new C11();
try { new v21(); } catch (e) {}
("isFrozen").fixed();
class C26 {
}
new C26();
new C26();
const v29 = new C26();
new Int8Array();
class C35 {
}
C35.name = C35;
function f36() {
    function f37(a38, a39) {
        new SharedArrayBuffer(a38);
        const v42 = new SharedArrayBuffer();
        const v44 = new DataView(v42);
        try { v44.setFloat64(SharedArrayBuffer, SharedArrayBuffer); } catch (e) {}
        try { v44.setFloat64(); } catch (e) {}
        const v47 = class {
            constructor(a49, a50) {
                a49 ?? a49;
                const v53 = gc();
                v53 ?? v53;
                function F55(a57, a58) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            }
        }
        const v60 = new WeakRef(Int32Array);
        v60[64] = v29;
        Int32Array[1];
        new v47();
    }
    f37();
}
({ construct: f36 }).construct();
