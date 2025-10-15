function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new Int8Array(255);
for (let v8 = 0; v8 < 100; v8++) {
    const v11 = Array(v8);
    const v13 = new String(String);
    WebAssembly.validate(v7, { builtins: v11, importedStringConstants: v13 });
    try { WebAssembly.Exception(); } catch (e) {}
    let v17 = 1073741824;
    let v19 = v17 || 846.1557363944708;
    const v20 = -F0;
    const v21 = v19++;
    v17++;
    v21 | v20;
}
