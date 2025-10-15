function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    this.a = a2;
}
const v5 = new F0(F0);
function f6(a7) {
    return v5;
}
const v10 = [v5];
new Worker(f6, { arguments: v10, type: "function" });
