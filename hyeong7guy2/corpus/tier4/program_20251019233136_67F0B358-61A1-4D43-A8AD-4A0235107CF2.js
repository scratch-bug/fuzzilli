const v0 = %WasmStruct();
for (let i2 = 0; i2 < 20000; ++i2) {
    const v8 = [i2];
    try { v8.push(3.3); } catch (e) {}
}
