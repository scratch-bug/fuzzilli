function f2() {
    return 750;
}
f2.valueOf = f2;
class C3 extends f2 {
}
function f4() {
    return C3;
}
Object.defineProperty(f4, "initial", { value: C3 });
const t10 = WebAssembly.Memory;
const v7 = new t10(f4);
try { v7.grow(Map); } catch (e) {}
