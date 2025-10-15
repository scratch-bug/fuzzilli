function f1() {
    return "🙌🏿";
}
f1.address = "🙌🏿";
const v3 = WebAssembly.Memory;
try { new v3(f1); } catch (e) {}
