const v4 = new Uint32Array(4096);
const v6 = { ...v4, [2147483649]: 64 };
function f8(a9, a10) {
    function f11(a12) {
        return f11;
    }
    Symbol[f11] -= 4096;
    return f8;
}
const v15 = [,v6];
new Worker(f8, { arguments: v15, type: "function" });
