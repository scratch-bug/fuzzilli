function f1(a2, a3, a4) {
    try { this.postMessage(this); } catch (e) {}
    this.toString = f1;
    function f7(a8) {
        return f7;
    }
    Object.defineProperty(Float32Array, this, { set: f7 });
    return Float32Array;
}
const v11 = { type: "function" };
const v12 = new Worker(f1, v11);
v12.constructor = f1;
try { v12.constructor(f1, v11, Worker); } catch (e) {}
