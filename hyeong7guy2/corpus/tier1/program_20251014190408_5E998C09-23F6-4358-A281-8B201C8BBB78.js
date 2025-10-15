function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a4;
}
const v5 = new F2(27204);
function f6() {
    return F2;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(v5, "length", { configurable: true, get: f6, set: f7 });
new F2(-0.0);
class C10 {
    static {
        v5[this];
    }
}
