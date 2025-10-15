function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 25; v2++) {
        this[v2] = v2;
    }
}
const v3 = new F0();
function f5(a6, a7, a8) {
    return new.target;
}
const v12 = [512,v3];
new Worker(f5, { arguments: v12, type: "function" });
