function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4, a5) {
    try { this.postMessage(F0, a4, F0); } catch (e) {}
    this.toString = f2;
    for (let v8 = 0; v8 < 5; v8++) {
    }
    Object.defineProperty(F0, this, { set: a3 });
    return this;
}
const v12 = new Worker(f2, { type: "function" });
v12.constructor = f2;
try { v12.constructor(Worker); } catch (e) {}
