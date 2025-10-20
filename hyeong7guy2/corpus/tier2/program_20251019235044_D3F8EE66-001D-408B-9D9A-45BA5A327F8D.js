function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4, a5) {
    try { this.postMessage(); } catch (e) {}
    this.toString = f2;
    Object.defineProperty(F0, this, { set: a3 });
    return f2;
}
const v11 = new Worker(f2, { type: "function" });
v11.constructor = f2;
try { v11.constructor(); } catch (e) {}
