const v2 = new Int8Array(4096);
for (let v3 = 0; v3 < 5; v3++) {
    WebAssembly.validate(v2, { builtins: v3 });
}
