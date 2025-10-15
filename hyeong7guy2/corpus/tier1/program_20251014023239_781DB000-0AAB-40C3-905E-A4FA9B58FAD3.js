const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
}
const v3 = new F1();
const v6 = new Float32Array(v3, v3, F1);
Object.defineProperty(v6, "toJSON", { writable: true, enumerable: true, value: v3 });
function f7(a8, a9) {
    return a9;
}
const v12 = [Symbol,v6];
new Worker(f7, { arguments: v12, type: "function" });
