const v0 = class {
}
async function f1(a2, a3) {
    function f5() {
        return 750;
    }
    f5.valueOf = f5;
    class C6 extends f5 {
    }
    v0 ? v0 : a3;
    eval("");
    function f11() {
        return v0;
    }
    Object.defineProperty(f11, "initial", { value: C6 });
    const t15 = WebAssembly.Memory;
    const v14 = new t15(f11);
    await f1;
    return v14;
}
f1(v0, f1);
f1();
%OptimizeFunctionOnNextCall(f1);
