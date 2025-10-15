function F0() {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, 8, { value: F0 });
    for (let v2 = 0; v2 < 25; v2++) {
        this[v2] = v2;
    }
}
const v3 = new F0();
function f5(a6, a7, a8) {
    return f5;
}
const v11 = [512,v3];
new Worker(f5, { arguments: v11, type: "function" });
