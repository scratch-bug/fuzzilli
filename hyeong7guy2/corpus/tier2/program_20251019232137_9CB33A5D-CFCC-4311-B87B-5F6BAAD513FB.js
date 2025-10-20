const v1 = {};
class C3 extends Int8Array {
    toString(a5, a6) {
        this.buffer = v1;
    }
}
function f7() {
    return Symbol;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(C3, "includes", { configurable: true, get: f7, set: f8 });
const v10 = new C3();
try { C3.includes(v10); } catch (e) {}
