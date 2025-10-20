class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        return f5;
    }
    function f10() {
        return F1;
    }
    Object.defineProperty(this, 4294967296, { enumerable: true, get: f10 });
    const v13 = [C0,this];
    new Worker(f5, { arguments: v13, type: "function" });
}
class C16 extends F1 {
}
new C16();
