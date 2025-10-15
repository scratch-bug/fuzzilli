async function f0(a1, a2) {
    function f4() {
        return 750;
    }
    f4.valueOf = f4;
    class C5 extends f4 {
    }
    function f6() {
        return f0;
    }
    Object.defineProperty(f6, "initial", { value: C5 });
    const t11 = WebAssembly.Memory;
    new t11(f6);
    return await f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
