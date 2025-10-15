function f1() {
    return 750;
}
f1.valueOf = f1;
class C2 extends f1 {
}
function f3() {
    return C2;
}
Object.defineProperty(f3, "initial", { value: C2 });
const t10 = WebAssembly.Memory;
const v6 = new t10(f3);
v6.buffer;
