const v1 = [0];
Object.defineProperty(v1, "parameters", { configurable: true, value: v1 });
const v3 = WebAssembly.Tag;
try { new v3(v1); } catch (e) {}
