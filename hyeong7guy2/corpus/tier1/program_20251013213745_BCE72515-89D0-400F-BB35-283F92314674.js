function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = this;
}
const v3 = new F0();
function f4(a5) {
    return a5;
}
Object.defineProperty(v3, "e", { configurable: true, set: f4 });
