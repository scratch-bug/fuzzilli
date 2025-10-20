function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -0.0;
    this.f = -0.0;
}
const v3 = new F1();
const v4 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v3;
    this.d = a8;
    this.f = a8;
    this.g = a8;
}
new F6(v4);
const v10 = new F6(16);
new F6(v10);
new F6(v10);
class C15 extends F1 {
    #f = v3;
    static [v3](a17, a18, a19, a20) {
        a19[15] **= a19;
        return a18;
    }
}
new C15();
new C15();
new C15();
new C15();
new Array(10);
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F28;
    this.a = -6;
}
const v31 = %WasmStruct();
[];
new F28();
function f34() {
}
const v36 = [];
function f37() {
}
function f38(a39) {
    new WeakSet();
    gc({ execution: "sync", type: "minor" });
}
Object.isExtensible;
let v49 = 0;
while (v49 < 3) {
    v49++;
}
Object.defineProperty(v36, "toString", { get: f37, set: f38 });
function F53(a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    function f57() {
    }
}
F53.toString = f34;
for (let i60 = 0;
    i60 < 1000;
    (() => {
        i60++;
        function F65() {
            if (!new.target) { throw 'must be called with new'; }
            new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
        }
        new F65();
    })()) {
}
