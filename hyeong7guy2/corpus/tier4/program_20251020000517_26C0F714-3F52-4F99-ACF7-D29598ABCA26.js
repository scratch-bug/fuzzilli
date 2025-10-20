async function f0() {
    const v7 = [0,97,115,109,1];
    v7[9] = v7;
    const v8 = new Uint8Array(v7);
    try {
        await WebAssembly.instantiate(v8);
    } catch(e12) {
    }
    return f0;
}
f0();
