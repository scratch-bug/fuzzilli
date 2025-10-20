new WeakMap();
Symbol.iterator;
function f7(a8) {
    function f10() {
        return 750;
    }
    f10.valueOf = f10;
    class C11 extends f10 {
    }
    function f12() {
    }
    Object.defineProperty(f12, "initial", { value: C11 });
    const t12 = WebAssembly.Memory;
    new t12(f12);
    for (let i17 = 16n; 16n <= 25000;) {
    }
    for (let v22 = 0; v22 < 50; v22++) {
    }
}
new Worker(f7, { type: "function" });
function f27() {
    return Worker;
}
new Worker(f27, { type: "function" });
