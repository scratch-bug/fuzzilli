function f0() {
    return f0;
}
let v1 = f0.bind();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    class C8 extends v1 {
    }
    return C8;
}
Object.defineProperty(F2, "constructor", { writable: true, value: f7 });
const v9 = F2.constructor;
try { v9(); } catch (e) {}
