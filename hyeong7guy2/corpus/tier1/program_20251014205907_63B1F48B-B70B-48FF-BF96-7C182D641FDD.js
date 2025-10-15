function f0(a1, a2, a3) {
    this.toString = f0;
    function f5(a6) {
        return a6;
    }
    this.onmessage = f5;
    Object.defineProperty(a2, this, { set: f5 });
    return f0;
}
const v9 = { type: "function" };
const v10 = new Worker(f0, v9);
v10.constructor = f0;
try { v10.constructor(v10, v9); } catch (e) {}
