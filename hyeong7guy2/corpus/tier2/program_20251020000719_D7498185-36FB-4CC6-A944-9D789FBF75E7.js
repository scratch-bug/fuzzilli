function f0(a1) {
    function f3() {
        return 750;
    }
    f3.valueOf = f3;
    class C4 extends f3 {
    }
    function f5() {
    }
    Object.defineProperty(f5, "initial", { value: C4 });
    const t10 = WebAssembly.Memory;
    new t10(f5);
    for (let v9 = 0; v9 < 250; v9++) {
    }
    return f3;
}
new Worker(f0, { type: "function" });
function f14() {
    return "function";
}
new Worker(f14, { type: "function" });
