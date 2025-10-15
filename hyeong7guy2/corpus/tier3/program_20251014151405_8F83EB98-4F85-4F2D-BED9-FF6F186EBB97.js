async function f0(a1, a2) {
    function f4() {
        return 750;
    }
    Object.defineProperty(f4, "initial", { value: 750 });
    const t5 = WebAssembly.Memory;
    const v7 = new t5(f4);
    await f0;
    return v7;
}
const v9 = f0(f0, f0);
f0(v9, v9);
