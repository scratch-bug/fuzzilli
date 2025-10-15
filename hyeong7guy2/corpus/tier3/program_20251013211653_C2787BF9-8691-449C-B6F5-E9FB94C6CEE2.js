try {
    for (let i2 = 0; i2 < 20000; ++i2) {
        ([1,2,3,4,5,6,7,8,9,10]).push(undefined);
    }
    const v24 = new Uint8Array(1);
    const t5 = WebAssembly.Module;
    new t5(v24);
} catch(e28) {
}
