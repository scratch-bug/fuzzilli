function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a3.length = a3;
    function f6(a7, a8) {
    }
    const v11 = [this,a5];
    new Worker(f6, { arguments: v11, type: "function" });
}
const v14 = new F1(F1);
const v15 = v14.constructor;
try { new v15(v14, 1, v14); } catch (e) {}
