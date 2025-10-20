function f1(a2, a3) {
    return 2485;
}
const t3 = WebAssembly.JSTag;
t3.Module = 0;
Map[Symbol.toPrimitive] = f1;
class C10 extends Map {
}
function f11() {
    return 2485;
}
Object.defineProperty(f11, "initial", { value: C10 });
const t12 = WebAssembly.Memory;
new t12(f11);
