let v1;
try { v1 = (4096).reverse(); } catch (e) {}
function f2() {
    const v3 = async () => {
        await WebAssembly.instantiate(v1, v1);
        return 4096;
    };
    return v1;
}
