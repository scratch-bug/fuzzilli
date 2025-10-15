function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function f6(a7, a8) {
    function f10() {
        return 750;
    }
    f10.valueOf = f10;
    class C11 extends f10 {
    }
    function f12() {
    }
    Object.defineProperty(f12, "initial", { value: C11 });
    const t14 = WebAssembly.Memory;
    const v15 = new t14(f12);
    v15.b = v15;
}
f6();
