function* f0(a1) {
    return a1;
}
const t3 = f0.constructor;
t3();
const v5 = WebAssembly.Tag;
try { new v5(); } catch (e) {}
