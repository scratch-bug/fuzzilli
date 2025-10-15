function f1() {
    return f1;
}
for (let i2 = 257; i2 < 20000; i2++) {
    new f1();
    let v9 = 536870912;
    const v10 = 257 % v9;
    v9++;
    -v10;
}
function f14() {
}
WebAssembly.compileStreaming(WebAssembly, WebAssembly).catch(f14);
