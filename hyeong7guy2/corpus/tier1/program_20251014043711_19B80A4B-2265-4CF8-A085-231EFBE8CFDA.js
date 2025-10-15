class C1 extends Map {
}
function f2() {
    return C1;
}
Object.defineProperty(f2, "initial", { value: C1 });
const v4 = WebAssembly.Memory;
try { new v4(f2); } catch (e) {}
