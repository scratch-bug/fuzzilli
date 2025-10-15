function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F0 {
}
const t5 = WebAssembly.Suspending;
new t5(v4);
