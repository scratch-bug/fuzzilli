function f0() {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 127;
}
const v6 = new F2(f0, 127);
Object.defineProperty(v6, "a", { configurable: true, get: f0 });
