const v1 = new Int8Array();
function f2(a3) {
    const v5 = new SharedArrayBuffer();
    v5.b = v5;
    return v1;
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, value: f2 });
v1[8] = v1;
