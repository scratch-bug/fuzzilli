function f2() {
    const v19 = new Uint8Array([0,97,115,109,1,0,0,0,13,5,1,9,64,127,7]);
    const v21 = WebAssembly.Module;
    try { new v21(v19); } catch (e) {}
    return 9;
}
Object.defineProperty(BigInt64Array, "toString", { configurable: true, enumerable: true, value: f2 });
const v23 = new BigInt64Array(9);
v23.join(BigInt64Array);
