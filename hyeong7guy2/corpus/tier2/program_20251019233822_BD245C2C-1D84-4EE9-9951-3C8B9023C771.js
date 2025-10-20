function f2() {
    return 750;
}
f2.valueOf = f2;
class C3 extends f2 {
}
function f4() {
    return 750;
}
f4.maximum = 2624;
Object.defineProperty(f4, "initial", { value: C3 });
const t11 = WebAssembly.Memory;
const v7 = new t11(f4);
try { v7.grow(2624); } catch (e) {}
