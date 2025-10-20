function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return 750;
    }
    f5.valueOf = f5;
    class C6 extends f5 {
    }
    function f7() {
        return f5;
    }
    Object.defineProperty(f7, "initial", { value: C6 });
    const t12 = WebAssembly.Memory;
    const v10 = new t12(f7);
    for (let v11 = 0; v11 < 5; v11++) {
        gc();
        v10[a2] = v11;
    }
}
new F0(F0, F0);
