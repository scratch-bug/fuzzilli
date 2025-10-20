try {
    const v1 = WebAssembly.Module;
    const v3 = new ArrayBuffer(v1);
    v3.transferToFixedLength();
    new v1(v3);
} catch(e6) {
}
