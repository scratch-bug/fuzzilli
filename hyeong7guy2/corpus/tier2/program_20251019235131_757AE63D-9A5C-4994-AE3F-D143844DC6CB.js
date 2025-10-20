function f1() {
    return WebAssembly;
}
WebAssembly.instantiateStreaming(WebAssembly, WebAssembly, WebAssembly).catch(f1);
const v7 = new Proxy(Object, { __proto__: Object });
Object.defineProperty(v7, "get", { writable: true, value: f1 });
