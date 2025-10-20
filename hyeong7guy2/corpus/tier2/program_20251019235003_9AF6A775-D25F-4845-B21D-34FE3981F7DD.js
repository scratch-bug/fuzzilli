function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return 750;
    }
    f5.valueOf = f5;
    class C6 extends f5 {
    }
    function f7() {
        return f7;
    }
    Object.defineProperty(f7, "initial", { value: C6 });
    const t12 = WebAssembly.Memory;
    const v10 = new t12(f7);
    v10.buffer;
}
const v12 = new F0(F0, F0);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    const t19 = a15.constructor;
    new t19();
}
new F13(v12);
