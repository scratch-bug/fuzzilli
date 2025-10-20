function f1() {
    return 750;
}
f1.valueOf = f1;
class C2 extends f1 {
}
function f3() {
    return f1;
}
Object.defineProperty(f3, "initial", { value: C2 });
const v5 = WebAssembly.Memory;
try { new v5(WebAssembly); } catch (e) {}
const v7 = new v5(f3);
v7.f = v7;
