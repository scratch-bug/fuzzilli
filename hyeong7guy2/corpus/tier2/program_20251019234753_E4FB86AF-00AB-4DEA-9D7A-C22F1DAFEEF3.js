function f2() {
    return 750;
}
f2[Symbol.toPrimitive] = f2;
class C5 extends f2 {
}
function f6() {
    return f6;
}
f6.maximum = 2624;
Object.defineProperty(f6, "initial", { value: C5 });
const t11 = WebAssembly.Memory;
const v9 = new t11(f6);
v9.toResizableBuffer();
v9.toResizableBuffer();
