function f1(a2, a3, a4) {
    this.postMessage(a3);
    this.toString = f1;
    function f7(a8) {
        return f7;
    }
    Object.defineProperty(Float32Array, this, { set: f7 });
    return f1;
}
const v12 = new Worker(f1, { type: "function" });
v12.constructor = f1;
try { v12.constructor(); } catch (e) {}
