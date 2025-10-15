class C1 extends Date {
}
const v2 = new C1();
function f4() {
    return 750;
}
f4.valueOf = f4;
class C5 extends f4 {
}
function f6() {
    return C5;
}
Object.defineProperty(f6, "initial", { value: C5 });
const t13 = WebAssembly.Memory;
const v9 = new t13(f6);
try { v9.grow(v2); } catch (e) {}
