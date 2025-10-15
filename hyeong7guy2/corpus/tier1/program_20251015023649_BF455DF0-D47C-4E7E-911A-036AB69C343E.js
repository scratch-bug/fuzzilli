const v1 = new Float32Array();
function f2(a3, a4, a5) {
    this.toString = f2;
    function f7(a8) {
        return a3;
    }
    this.onmessage = f7;
    Object.defineProperty(v1, this, { set: f7 });
    return a3;
}
const v12 = new Worker(f2, { type: "function" });
v12.constructor = f2;
try { v12.constructor("function"); } catch (e) {}
