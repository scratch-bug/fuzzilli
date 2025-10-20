function f1() {
    return f1;
}
const v2 = class extends f1 {
}
Object.defineProperty(v2, "importedStringConstants", { writable: true, configurable: true, enumerable: true, value: 877 });
function f4() {
    return v2;
}
WebAssembly.compileStreaming(f1, v2).catch(f4);
for (let i9 = 0, i10 = 10; i10; i10--) {
}
