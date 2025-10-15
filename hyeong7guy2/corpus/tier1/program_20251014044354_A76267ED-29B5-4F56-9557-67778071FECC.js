function f1() {
    return -3;
}
f1.valueOf = f1;
class C2 extends f1 {
}
function f3() {
    return C2;
}
Object.defineProperty(f3, "initial", { value: C2 });
const v5 = WebAssembly.Memory;
try { new v5(f3); } catch (e) {}
