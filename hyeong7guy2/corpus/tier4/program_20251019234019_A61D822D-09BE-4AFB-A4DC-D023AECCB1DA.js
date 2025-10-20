function f0(a1, a2, a3) {
    let v5;
    try { v5 = this.getMessage(this, this); } catch (e) {}
    this.postMessage(a2);
    return v5;
}
const v10 = new Worker(f0, { type: "function" });
v10.constructor = f0;
v10.constructor();
