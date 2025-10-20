function f0(a1, a2) {
    return f0;
}
function f3(a4, a5) {
    return f3;
}
const t6 = WebAssembly.Suspending;
const v8 = new t6(f3);
Object.defineProperty(v8, "constructor", { writable: true, value: f0 });
new Uint32Array(268435440);
